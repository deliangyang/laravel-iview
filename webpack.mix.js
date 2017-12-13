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

mix.options({
    extractVueStyles: false,
    processCssUrls: true,
    uglify: {},
    purifyCss: false,
//purifyCss: {},
    postCss: [require('autoprefixer')],
    clearConsole: false
});

mix.webpackConfig({
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        }),
        new LiveReloadPlugin(),
    ]
});

mix.less('resources/assets/less/index.less', 'public/css');

mix.js('resources/assets/js/app.js', 'public/js').extract(['vue', 'iview']);
mix.sass('resources/assets/sass/app.scss', 'public/css');
