import Router from 'express';
import create from '../controllers/route/createRoute.js';
import list from '../controllers/route/list.js';
import authUser from '../middleware/authentication.js';
import deleteOne from '../controllers/route/deleteOne.js';
import updateOne from '../controllers/route/updateOne.js'
import listOne from '../controllers/route/listOne.js';
import searchRoute from '../controllers/route/searchRoute.js';

const router = Router();


router.route('/:num')
    .get(list);

router.route('/')
    .post(authUser, create);


router.route('/getroute/:id')
    .get(listOne)


 router.route('/:id')   
    .delete(authUser, deleteOne)
    .put(authUser,updateOne)
router.route('/search')
    .post(searchRoute)


export default router;
