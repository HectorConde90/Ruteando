import routeDAO from '../../model/route/dao.js'


const listRoutes = async (req, res, next) => {

    try {

        const limit = Number(req.params.num)
        const route = await routeDAO.list(limit);

        res.status(201).json(route);

    } catch (error) {
        next(error);
    }

}

export default listRoutes;