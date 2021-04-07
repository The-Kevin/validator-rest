import Routes from 'express';

import user from './modules/user/controllers/user.controller';

const routes = Routes();

routes.route('/create')
    .post(user)

export default routes;