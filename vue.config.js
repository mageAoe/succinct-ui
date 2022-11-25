const { defineConfig } = require('@vue/cli-service')
const { PurgeIcons } = require('purge-icons-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('purgeIcons').use(PurgeIcons).tap(args => {
      return args
    })
  }
})
