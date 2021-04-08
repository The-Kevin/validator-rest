import Routes from 'express';

import {createUserValidate, findOneValidate}  from './validation';


import userCreate from './controllers/createUser.controller';
import findOne from './controllers/findOne';


const routes = Routes();

routes.route('/create')
    .post(createUserValidate, userCreate);

routes.route('/findOne/:id')
    .get(findOneValidate,findOne)

export default routes;