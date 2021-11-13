import Koa from'koa';
import config from'./config';
import initController from'./controllers';
import render from'koa-swig';
import co from'co';
import staticServer from'koa-static';
import { historyApiFallback } from'koa2-connect-history-api-fallback';
import errorHandler from'./middlewares/ErrorHandler';
import  log4js from "log4js";

log4js.configure({
    appenders: { 
        globalError: { type: "file", filename: "./logs/error.log" },
        InfoError: { type: "file", filename: "./logs/info.log"}
    },
    categories: { 
        default: { appenders: ["globalError"], level: "error" },
        info: { appenders: ["InfoError"], level: "Info" }

 }
});

const logger = log4js.getLogger("globalError");

const app = new Koa();

app.use(staticServer(config.staticDir));

app.use(historyApiFallback({
    index: '/',
    whiteList: ['/api']
}));

errorHandler.error(app, logger);

initController(app);


app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache,
    varControls: ['[[', ']]'],
}));


app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});