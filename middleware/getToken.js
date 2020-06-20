import jwt from 'jsonwebtoken';

class Token {
    
    
    getTokenFrom(request) {
        const authorization = request.get('authorization');
        
        if (authorization && authorization.toLowerCase().startsWith('bearer '))
            return authorization.substring(7);

        return null;
    }
    
   async tokenVerify(token) {
        const decodedToken = await jwt.verify(token, process.env.SECRET);
        return decodedToken;
    }
}

// const tokenVerify = async (token) => {

//     const decodedToken = await jwt.verify(token, process.env.SECRET);

//     return decodedToken;
// };

// const getTokenFrom = request => {
//     const authorization = request.get('authorization');

//     if (authorization && authorization.toLowerCase().startsWith('bearer '))
//         return authorization.substring(7);

//     return null;
// }


export default new Token();