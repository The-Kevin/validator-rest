import Routes from 'express';

import {createUserValidate, updateValidade, deleteValidate, loginValidade}  from './validation';


import {create, find, update, deleteUser, login} from './controllers/user.controller';

const routes = Routes();

routes.route('/create')
    .post(createUserValidate, create);

routes.route('/login')
    .post(loginValidade, login)

routes.route('/find')
    .get(find)

routes.route('/update/:id')
    .put(updateValidade, update)

routes.route('/delete')
    .delete(deleteValidate ,deleteUser)
    
export default routes;