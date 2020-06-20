import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HTTPerror from 'http-errors';
import userDAO from '../../model/user/dao.js';


const login = async (req, res, next) => {
    try {

        const body = req.body;
        // console.log(body)
        
        // Buscar el email en la BD
        const user = await userDAO.findUserByEmail({ email: body.email });
       
        // console.log(user.password);
        // console.log(body.password);
        const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.password);

        if (!(user && passwordCorrect)) {
            res.status(201).json({ message: 'Wrong user or password' });
            next(HTTPerror(401, { message: 'Wrong user or password' }));
        } else {

            const userToken = {
                user: user.name,
                email:user.email,
                id: user._id
            }

            const token = await jwt.sign(userToken, process.env.SECRET);

            res.status(201).json({ token });
        }


    } catch (error) {
        next(error);
    }
}

export default login;