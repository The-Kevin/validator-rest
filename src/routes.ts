import Routes from 'express';

const routes = Routes();

routes.get('/', (req, res) => {
    res.send('test');
})
    

export default routes;