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
    distance: Number,
    altitude: Number,
    difficulty: String,
    user_name: String,
    circular: Boolean,
    location: String,
    location_coordinates: Array,
    register_date: Date

})

export default routeSchema;