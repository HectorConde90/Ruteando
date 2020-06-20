import routeDAO from '../../model/route/dao.js'
import userDAO from '../../model/user/dao.js';
import Token from '../../middleware/getToken.js';


const createRoute = async (req, res, next) => {

    try {

        // Saco la id del usuario del token
        const token = await Token.getTokenFrom(req);
        const decodedToken = await Token.tokenVerify(token);
        // Busco al usuario por id que la ha creado
        const user = await userDAO.findUserById(decodedToken.id)
        
        
        // Creo la ruta
        const newRoute = req.body;
        newRoute.user_name = user.name + ' ' +user.last_name;
        
        newRoute.user_id = user.id;
        newRoute.location_coordinates = newRoute.coordinates[0];
        // newRoute.location.push(newRoute.coordinates[0]) 
        // console.log(newRoute);
        
        // newRoute.name = user.name;
        const route = await routeDAO.create(newRoute);
        
        
        

        //modifico las rutas del usuario
        const updatedUser = await userDAO.addRoute(user._id, route._id);
    
        res.status(201).json(route);

    } catch (error) {
        next(error);
    }

}

export default createRoute;