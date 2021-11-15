import Controller from './controller';
import BooksModel from'../models/BooksModels';

const booksModle = new BooksModel();

class BooksController extends Controller {
    constructor() {
        super();
    }

    async actionBooksListpage(ctx) {
        const result = await booksModle.getBooksList();
        ctx.body = await ctx.render('books/list', {
            data: result.data
        });
    }
}

export default BooksController;