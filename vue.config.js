module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://liucien.github.io/blog/dist/'
        : '/',
    productionSourceMap: false,
};