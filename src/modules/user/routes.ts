import Routes from 'express';

import {createUserValidate, findOneValidate}  from './validation';

import userCreate from './controllers/createUser.controller';

const routes = Routes();

routes.route('/create')
    .post(createUserValidate, userCreate);

export default routes;