import Routes from 'express';

import {createUserValidate, updateValidade, deleteValidate, loginValidade}  from './validation';
import {auth} from '../middlewares/auth';

import {create, find, update, deleteUser, login} from './controllers/user.controller';

const routes = Routes();

routes.route('/create')
    .post(createUserValidate, create);

routes.route('/login')
    .post(loginValidade, login)

routes.route('/find')
    .get(auth ,find)

routes.route('/update/:id')
    .put(auth, updateValidade, update)

routes.route('/delete')
    .delete(auth, deleteValidate ,deleteUser)
    
export default routes;