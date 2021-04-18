import express from 'express';
import cors from 'cors';
import database from '../src/database/connect';

import routesUser from './modules/user/routes';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); 
app.use(cors());

if(app){
    database(); 
}

app.use('/user', routesUser);

app.listen(port, (): void => {
    console.log(`running in http://localhost:${port}`);
    console.log(app.response.status(200)['statusCode']);
});