import express from 'express';
import cors from 'cors';
import routerUser from './routes/routerUser.js';
import routerRoute from './routes/routerRoute.js';
import mongo from './data/mongodb.js';
import dotenv from 'dotenv';
import handleError from './middleware/handlError.js';

const sendSpaFileIfUnmatched = (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
}

dotenv.config();


const app = express();


//Middlewares
app.use(cors());
app.use(express.json());

//Static
// static html
app.use(express.static(__dirname + '/public'));

// Routes

app.use('/api/routes', routerRoute);
app.use('/api/user', routerUser);

// MiddlewareError

app.use(handleError.logError);
app.use(handleError.clientError);
app.use(handleError.genericError);



app.use(sendSpaFileIfUnmatched);

// Server listen
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on ', PORT));