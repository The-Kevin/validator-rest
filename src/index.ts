import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';

import routesUser from './modules/user/routes';
import db from './database/connect';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); 
app.use(cors());
connect(db, { useNewUrlParser: true, useUnifiedTopology: true })


app.use('/user', routesUser);

app.listen(port, () => {
    console.log(`running in http://localhost:${port}`);
    console.log(app.response.status(200)['statusCode']);
});