const { resolve } = require("core-js/fn/promise");

module.exports = {
  lintOnSave: false,
  configWebpack:{
    resolve:{
      extensions:['js','vue'],
      alias:{
        '@':resolve('src')
      }
    }
  }
};
