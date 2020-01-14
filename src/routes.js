const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/DevController');
const SeachController = require('./controllers/SearchController');

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/search', SeachController.index);
routes.delete('/remove', DevController.destroy);
routes.put('/update', DevController.update);

module.exports = routes;
