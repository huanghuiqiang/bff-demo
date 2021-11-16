import SafeRequest from "../utils/safeRequest";

class BooksModel {
    getBooksList() {
        return SafeRequest.fetch('http://localhost:3006/test');
    }
}

 export default BooksModel;