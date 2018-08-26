const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
    // Bug: `declarationMap` is not removed along with `declaration`
    // when `transpileOnly` is set to true
    // options: {
    // transpileOnly: true,
    // },
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.plugins = [new TsconfigPathsPlugin()]
  return config
}
