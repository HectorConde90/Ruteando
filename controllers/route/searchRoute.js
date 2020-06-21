import routeDAO from '../../model/route/dao.js'


const searchRoute = async (req, res, next) => {

    try {

        
        
        const route = await routeDAO.searchRoutes(req.body);

        res.status(201).json(route);

    } catch (error) {
        next(error);
    }

}

export default searchRoute;