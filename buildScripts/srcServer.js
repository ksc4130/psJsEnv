import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import wpConfig from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const wpCompiler = webpack(wpConfig);

app.use(require('webpack-dev-middleware')(wpCompiler, {
  noInfo: true,
  publicPath: wpConfig.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if(err) {
    console.log('err', err);
  } else {
    open('http://localhost:' + port);
    console.log('listening on port 3000');
  }
});


//lt --port 3000 --subdomain ksc4130
