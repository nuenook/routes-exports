import bodyParser from 'body-parser';

import express from 'express';

const app = express();
app.use(bodyParser.json());


import allRoute from './routes'

export default allRoute;