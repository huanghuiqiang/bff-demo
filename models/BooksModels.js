import axios from "axios";

class BooksModel {
    getBooksList() {
        return axios.get('http://localhost:3006/test');
    }
}

 export default BooksModel;