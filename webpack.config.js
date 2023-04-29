const path = require('path');
module.exports = {
  entry: './assets/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  watch: true
};