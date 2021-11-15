import Router from'@koa/router';
import IndexController from'./indexController';
import ApiController from'./ApiControllers';
import BooksController from'./BooksController';

const router = new Router();
const indexController = new IndexController();
const apiController = new ApiController();
const booksController = new BooksController();

function initController(app) {
    /**页面路由 */
    router.get('/', indexController.actionIndex);
    router.get('/books/list', booksController.actionBooksListpage);

    /**接口路由 */
    router.get('/api/getDataList', apiController.actionDataList);
    app
        .use(router.routes())
        .use(router.allowedMethods());
};

export default initController;