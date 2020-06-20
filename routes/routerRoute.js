import Router from 'express';
import create from '../controllers/route/createRoute.js';
import list from '../controllers/route/list.js';
import authUser from '../middleware/authentication.js';
import deleteOne from '../controllers/route/deleteOne.js';
import updateOne from '../controllers/route/updateOne.js'
import listOne from '../controllers/route/listOne.js';

const router = Router();



router.route('/')
    .get(list)
    .post(authUser, create);


router.route('/:id')
    .get(listOne)
    .delete(authUser, deleteOne)
    .put(authUser,updateOne)


export default router;
