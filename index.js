const express = require('express');
const routes = require('./src/routes');
const mongoConnection = require('./config/mongo-conection');

const mongoose = require('mongoose');

mongoose.connect(mongoConnection.url, mongoConnection.rules);

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);
