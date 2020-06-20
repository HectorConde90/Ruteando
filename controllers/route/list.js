import routeDAO from '../../model/route/dao.js'


const listRoutes = async (req, res, next) => {

    try {

        
        const route = await routeDAO.list();

        res.status(201).json(route);

    } catch (error) {
        next(error);
    }

}

export default listRoutes;