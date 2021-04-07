import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/CRUD', routes);


app.listen(port, () => {
    console.log(`running in http://localhost:${port}`);
    console.log(app.response.status(200)['statusCode']);
});