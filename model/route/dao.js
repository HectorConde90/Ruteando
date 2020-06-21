import Route from './model.js';

class RouteDAO {

    constructor() { }

    list(num = 10) {
        return Route.find().sort({ _id: -1}).limit(num);
    }

    create(route) {
        return new Route(route).save();
    }

    deleteOne(id) {
        return Route.deleteOne({ _id: id })
    }

    findOne(id) {
        return Route.findById(id);
    }

    updateOne(id, route) {
        return Route.updateOne({ _id: id }, { title: route.title, description: route.description, coordinates: route.coordinates });
    }

    findRoutes(id) {
        return Route.find({ _id: id });
    }

    searchRoutes(params) {
        const search = { $and: params}
        return Route.find(search);
    }
    

}

export default new RouteDAO();