const path = require('path')
module.exports = {
  lintOnSave: false,
  configureWebpack:{
    resolve:{
      extensions:['js','vue'],
      alias:{
        '@':path.join(__dirname,'src')
      }
    }
  }
};
