import axios from "axios";

class SafeRequest {
    static fetch(url) {
        let result = {
            code: 0,
            message: "",
            data: null
        }
        return new Promise(resolve => {
            axios(url)
            .then(res => {
                result.data = res.data;
                resolve(result);
            })
            .catch(err => {
                result.message = err.message;
                resolve(result);
            })
        })
    }
}

export default SafeRequest;