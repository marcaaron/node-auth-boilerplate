const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');
const congif = require('./config');

app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
router(app);

mongoose.connect(config.db);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server running at port: ', port);
