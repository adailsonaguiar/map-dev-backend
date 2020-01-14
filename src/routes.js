const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/DevControlle');

routes.get('/devs', (req, res) => {
  return res.json({ message: `Olá ${req.query.search}` });
});

routes.post('/devs', DevController.store);

module.exports = routes;
