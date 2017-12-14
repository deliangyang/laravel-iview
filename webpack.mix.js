let mix = require('laravel-mix');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    entry: {
      //  main: path.resolve(__dirname, 'resources/assets/js/app.js')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        }),
        new LiveReloadPlugin(),
        //new webpack.HashedModuleIdsPlugin(),
       /* new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
    ],
    output: {
        //chunkFilename: '[name].bundle.js?[chunkhash]',
    }
});

mix.less('resources/assets/less/index.less', 'public/css');

mix.js('resources/assets/js/app.js', 'public/js').extract([
    'vue',
    'iview',
    'axios',
    'lodash',
]);
mix.sass('resources/assets/sass/app.scss', 'public/css');

//mix.minify('public/js/app.js').minify('public/js/vendor.js');

