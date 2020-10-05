const path = require('path');
// webpack = require ('webpack'),
module.exports ={
    entry :'./src/index.js',
    mode:'development',
    output: {
        filename:'main.js',
        path:path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader',
            ],
   
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader',
            ],
          },
        ],
      },
    };
   