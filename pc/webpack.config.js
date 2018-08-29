let initConfig = require('my-webpack-config/lib/index').default;

module.exports = initConfig(
  {
    htmlOption: {
      favicon: './favicon.ico',
    },
    env: process.env.NODE_ENV
  },
  config => {
    return Object.assign({}, config, {
      devServer: {
        proxy: {
          '/api': 'http://120.237.31.12:8327/',
        },
      },
    });
  }
);
