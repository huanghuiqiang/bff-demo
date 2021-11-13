class Errorhandler {
    static error(app, logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
                if(ctx.status === 404) {
                    ctx.body = '友好的404页面'
                }
            } catch (e) {
                logger.error(e.message);
                ctx.body = '500 请求，正在积极修复'
            }
        })
    }
}

export default Errorhandler;