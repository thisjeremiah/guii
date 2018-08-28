const path = require('path')
const getConfig = require('metro-bundler-config-yarn-workspaces')
const options = { nodeModules: path.resolve(__dirname, '..', '..', '..') }
module.exports = getConfig(path.resolve(__dirname, '..'), options)
