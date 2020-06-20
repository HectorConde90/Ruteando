import mongoose from 'mongoose';
import routeSchema from './schema.js';

const Route = mongoose.model('route', routeSchema);

export default Route;
