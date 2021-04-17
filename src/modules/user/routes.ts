import Routes from 'express';

import {createUserValidate, updateValidade}  from './validation';


import {create, find, update, deleteUser} from './controllers/user.controller';

const routes = Routes();

routes.route('/create')
    .post(createUserValidate, create);

routes.route('/find')
    .get(find)

routes.route('/update/:id')
    .put(updateValidade, update)

routes.route('/delete')
    .delete(deleteUser)
    
export default routes;