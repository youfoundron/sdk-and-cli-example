const webpack = require('webpack')
const path = require('path')

const mode = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development'

const sdkConfig = {
  target: 'web',
  mode,
  entry: {
    sdk: './src/sdk.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [new webpack.IgnorePlugin(/^electron$/)],
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  }
}

const sdkNodeConfig = {
  target: 'node',
  mode,
  entry: {
    sdk: './src/sdk.ts'
  },
  output: {
    filename: '[name].node.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [new webpack.IgnorePlugin(/^electron$/)],
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  }
}

const cliConfig = {
  target: 'node',
  mode,
  entry: {
    cli: './src/cli.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }    
    ]
  },
  plugins: [new webpack.IgnorePlugin(/^electron$/)],
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  }
}

module.exports = [
  sdkConfig,
  sdkNodeConfig,
  cliConfig
]