import routeDAO from '../../model/route/dao.js'
import userDAO from '../../model/user/dao.js';
import HTTPerror from 'http-errors'
import Token from '../../middleware/getToken.js';

const deleteOne = async (req, res, next) => {

    try {

        
        // Id de la ruta
        const idRoute = req.params.id;
        // console.log(idRoute);

        // saco la id del usuario
        const route = await routeDAO.findOne(idRoute);
        const userId = route.user_id;

        // Saco la id del usuario del token
        const token = await Token.getTokenFrom(req);
        const decodedToken = await Token.tokenVerify(token);


    //    console.log(decodedToken);
       
        
        // Gestion del error
        if (userId != decodedToken.id) {
            next(HTTPerror(401, { message: 'Wrong user' }));
        } else {
            // Elimino la ruta de la BD
        const deleteRoute = await routeDAO.deleteOne(idRoute);
        
        // Elimino la ruta del usuario
        const user = await userDAO.removeRoute(userId, idRoute)

        res.status(201).json(user);
        }
        
        

    } catch (error) {
        next(error);
    }

}

export default deleteOne;