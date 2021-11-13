import path from'path';


/**公共配置 */
let config = {
    viewDir: path.join(__dirname, '../', 'views'),
    staticDir: path.join(__dirname, '../', 'assets'),
}

/** 开发环境配置 */
if (process.env.NODE_ENV === 'development') {
    const devConfig = {
        port: 3000,
        cache: false,
    }
    config = {
        ...config,
        ...devConfig
    }
}

/** 生产环境配置 */
if (process.env.NODE_ENV === 'production') {
    const prodConfig = {
        port: 80,
        cache: 'memeory'
    }
    config = {
        ...config,
        ...prodConfig
    }
}

export default config;