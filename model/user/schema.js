import mongoose from 'mongoose';


const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, 'name required'],
       
    },
    last_name: {
        type: String,
        required: [true, 'las name required'],

    },
    password: {
        type: String,
        required: [true, 'password required']
    },
    email: {
        type: String,
        required: [true, 'email required']

    },
    routes: Array,
    favorite_routes: Array,
    register_date: Date

})

export default userSchema;