import Routes from 'express';

import {createUserValidate, findOneValidate, updateValidade}  from './validation';

import {create, findOne, update} from './controllers/user.controller';

const routes = Routes();

routes.route('/create')
    .post(createUserValidate, create);

routes.route('/findOne')
    .get(findOneValidate, findOne)

routes.route('/update/:id')
    .put(updateValidade, update)
export default routes;