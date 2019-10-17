const path = require('path')

const clientConfig = {
  entry: {
    client: './src/client.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js(x|)$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

// const serverConfig = {
//   ...clientConfig,
//   entry: {
//     client: './server/index.js'
//   },
//   target: 'node',
//   output: {
//     ...clientConfig.output,
//     filename: 'server.js'
//   }
// }

module.exports = clientConfig
