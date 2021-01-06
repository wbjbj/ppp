const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
    css: [],
    js: [
        'https://cdn.bootcss.com/vue/2.5.17/vue.runtime.min.js',
        'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
        'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    ]
}
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    chainWebpack: config => {
        // 生产环境配置
        if (isProduction) {
            // 生产环境注入cdn
            config.plugin('html')
                .tap(args => {
                    args[0].cdn = cdn;
                    return args;
                });
        }
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end()

    },
    configureWebpack: config => {
        if (isProduction) {
            // 用cdn方式引入
            config.externals = {
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'axios': 'axios'
            }
        }
    },
}