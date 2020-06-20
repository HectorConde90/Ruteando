import userDAO from '../../model/user/dao.js'
import bcrypt from 'bcrypt';

const newUser = async (req, res, next) => {

    try {
        

        
        const body = req.body;
        const user = await userDAO.findUserByEmail({ email: body.email });
        if (user !== null) {
            res.status(201).json({ message: 'User already exists' });
            next(HTTPerror(401, { message: 'User already exists' }));
        } else {
            body.password = await bcrypt.hash(body.password, 10);
            const user = await userDAO.register(body);
        
            res.status(201).json(user);
        }
            

    } catch (error) {
        next(error);
    }

}

export default newUser;