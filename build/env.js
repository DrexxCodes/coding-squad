// webpack.config.js
const webpack = require('webpack');

const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const tawkKey = process.env.TAWK_KEY;


module.exports = {
  // ... other webpack configurations
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify('your_api_key'),
      'process.env.AUTH_DOMAIN': JSON.stringify('your_auth_domain'),
      'process.env.TAWK_KEY': JSON.stringify('your_tawk_key'),
    }),
  ],
};

console.log(`API Key: ${apiKey}`);
console.log(`Auth Domain: ${authDomain}`);
console.log(`Tawk Key: ${tawkKey}`);
