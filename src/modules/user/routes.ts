import Routes from 'express';

import {createUserValidate, findOneValidate}  from './validation';

import {create} from './controllers/user.controller';

const routes = Routes();

routes.route('/create')
    .post(/*createUserValidate,*/ create);

export default routes;