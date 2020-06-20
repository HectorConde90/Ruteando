import userDAO from '../../model/user/dao.js';
import HTTPerror from 'http-errors'
import Token from '../../middleware/getToken.js';

const removeFavoriteRoute = async (req, res, next) => {

    try {


        // Id de la ruta
        const idRoute = req.params.id;

        // saco la id del usuario
        
        

        // Saco la id del usuario del token
        const token = await Token.getTokenFrom(req);
        const decodedToken = await Token.tokenVerify(token);
        const userId = decodedToken.id;

        //    console.log();


        // Gestion del error
        if (userId != decodedToken.id) {
            next(HTTPerror(401, { message: 'Wrong user' }));
        } else {
            

            // Elimino la ruta del usuario
            const user = await userDAO.removeFavoriteRoute(userId, idRoute)

            res.status(201).json(user);
        }



    } catch (error) {
        next(error);
    }

}


export default removeFavoriteRoute;