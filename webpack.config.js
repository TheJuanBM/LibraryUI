const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    module: {
      rules: [
        {
          test: /\.(mjs|tsx?|jsx?)$/,
          use: 'raw-loader',
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: ['/stories'],
          query: {
            presets: ['es2015']
          }
        }
      ],
      webpackConfigEnv,
      argv
    }
  })

  return merge(defaultConfig, {})
}
