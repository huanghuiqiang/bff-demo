import Controller from './controller';
import BooksModel from'../models/BooksModels';

const booksModle = new BooksModel();

class ApiController extends Controller {
    constructor() {
        super()
    }

    async actionDataList(ctx) {
        const result = await booksModle.getBooksList();
        ctx.body = result.data;
    }
}

export default ApiController;