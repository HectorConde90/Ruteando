import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//mongodb://localhost/ruteando
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

export default mongoose;