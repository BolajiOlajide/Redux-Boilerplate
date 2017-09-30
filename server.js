import express from 'express';
import webpack from 'webpack';
import open from 'open';
import path from 'path';

import config from './webpack.config';

const port = process.env.PORT || 4000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join( __dirname, "index.html"));
});

app.listen(port, err => {
  err ? console.log(err) : open(`http://localhost:${port}`);
});
