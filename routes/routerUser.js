import Router from 'express';
import newUser from '../controllers/user/newUser.js';
import login from '../controllers/user/login.js';
import getUser from '../controllers/user/getUser.js';
import getRoutesUser from '../controllers/user/getRoutesUser.js';
import addFavoriteRoute from '../controllers/user/addFavoriteRoute.js';
import getFavoriteRoutes from '../controllers/user/getFavoriteRoutes.js';
import removeFavoriteRoute from '../controllers/user/removeFavoriteRoute.js';

const router = Router();



router.route('/register')
    .post(newUser)

router.route('/login')
    .post(login);

router.route('')
    .get(getUser)

router.route('/routes/myroutes')
    .get(getRoutesUser)
router.route('/routes/favorite')
    .get(getFavoriteRoutes)
    .post(addFavoriteRoute)

router.route('/remove/favorite/:id')
    .get(removeFavoriteRoute)




export default router;
