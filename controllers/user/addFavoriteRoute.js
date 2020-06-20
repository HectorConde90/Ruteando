import userDAO from '../../model/user/dao.js';
import Token from '../../middleware/getToken.js';


const addFavoriteRoute = async (req, res, next) => {

    try {


        // Id de la ruta
        const routeId = req.body.id;
        
        // Saco la id del usuario del token
        const token = await Token.getTokenFrom(req);
        const decodedToken = await Token.tokenVerify(token);
        const userId = decodedToken.id;
       
        // Busco al usuario
        const user = await userDAO.findUserById(userId);
        const favoriteRoutes = user.favorite_routes;
        if (favoriteRoutes.some(id => routeId == id)) {
            res.status(201).json({ "message": "Favorite route already exists" });
        } else {
            // Añado la ruta del usuario
            const route = await userDAO.addFavoriteRoute(userId, routeId)
            res.status(201).json({ "message": "update successfully" });
        }


    } catch (error) {
        next(error);
    }

}

export default addFavoriteRoute;