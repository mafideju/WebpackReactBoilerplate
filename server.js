const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const PORT = 8081;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(PORT, err => {
  if (err) {
    return console.log("Erro ao Subir Servidor =>", err);
  }
  console.log(`Servidor /'Webpack Hot Reload Dev Server/' Ativo na Porta ${PORT}`)
});
