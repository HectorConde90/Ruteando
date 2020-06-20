import routeDAO from '../../model/route/dao.js'


const listOne = async (req, res, next) => {

    try {

        const routeId = req.params.id
        const route = await routeDAO.findOne(routeId);

        res.status(201).json(route);

    } catch (error) {
        next(error);
    }

}

export default listOne;