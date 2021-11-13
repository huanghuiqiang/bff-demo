import Router from'@koa/router';
const router = new Router();
import IndexController from'./indexController';
const indexController = new IndexController();

import ApiController from'./ApiControllers';
const apiController = new ApiController();

function initController(app) {
    router.get('/', indexController.actionIndex);
    router.get('/api/getDataList', apiController.actionDataList);

    app
        .use(router.routes())
        .use(router.allowedMethods());
};

export default initController;