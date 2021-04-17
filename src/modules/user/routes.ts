import Routes from 'express';

import {createUserValidate, findOneValidate}  from './validation';

import {create, findOne} from './controllers/user.controller';

const routes = Routes();

routes.route('/create')
    .post(createUserValidate, create);

routes.route('/findOne')
    .get(findOneValidate,findOne)

export default routes;