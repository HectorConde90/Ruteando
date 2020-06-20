import routeDAO from '../../model/route/dao.js';
import userDAO from '../../model/user/dao.js';
import Token from '../../middleware/getToken.js';


const listRoutes = async (req, res, next) => {

    try {
        const token = await Token.getTokenFrom(req);

        const decodedToken = await Token.tokenVerify(token);
        const userId = decodedToken.id;
        // console.log(userId)
        const user = await userDAO.findUserById(userId);
        // console.log(user.routes);
        const routes = await routeDAO.findRoutes(user.routes);
        
        res.status(201).json(routes);

    } catch (error) {
        next(error);
    }

}

export default listRoutes;