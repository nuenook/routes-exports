import bodyParser = require('body-parser');

import express = require('express')

const app = express();
app.use(bodyParser.json());


import allRoute from './routes'

export default allRoute;