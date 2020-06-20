import userDAO from '../../model/user/dao.js'
import Token from '../../middleware/getToken.js';

const getUser = async (req, res, next) => {

    try {

        const token = await Token.getTokenFrom(req);
        const decodedToken = await Token.tokenVerify(token);

        const userId = decodedToken.id
        const user = await userDAO.findUserById(userId);

        res.status(201).json(user);

    } catch (error) {
        next(error);
    }

}

export default getUser;