import User from './model.js';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

class UserDAO {

    constructor() { }

    register(user) {
        return new User(user).save();
    }

    findUserByEmail(pEmail) {
        // console.log(pEmail);
        return User.findOne(pEmail);
    }
    findUserById(id) {
        return User.findById(id);
    }
    addRoute(id, route_id) {
        return User.findByIdAndUpdate({ _id: id }, { $push: {routes: route_id} });
        
    }

    removeRoute(user_id, route_id) {
        return User.findByIdAndUpdate(user_id,
            {
                $pull: {
                    routes: ObjectId(route_id) 
                }
            }, { new: true });
    }
    
    addFavoriteRoute(user_id, route_id) {
        return User.findByIdAndUpdate({ _id: user_id }, { $push: { favorite_routes: ObjectId(route_id) } });
    }
    removeFavoriteRoute(user_id, favorite_route) {
        return User.findByIdAndUpdate(user_id,
            {
                $pull: {
                    favorite_routes: ObjectId(favorite_route)
                }
            }, { new: true });
    }
    
}
    


export default new UserDAO();