const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/DevControlle');

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

module.exports = routes;
