import mongoose from 'mongoose';


const routeSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, 'title required'],

    },
    description: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    coordinates: {
        type: Object

    },
    distance: String,
    altitude: String,
    difficulty: String,
    user_name: String,
    register_date: Date

})

export default routeSchema;