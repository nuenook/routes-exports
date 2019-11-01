const express = require('express');
import allroute from './routes'

const app = express();

app.use("/api", allroute)

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});