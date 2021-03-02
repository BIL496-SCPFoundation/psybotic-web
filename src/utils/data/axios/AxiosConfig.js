import axios from 'axios';

class AxiosConfig {
    constructor() {
        this.endpoint = "";
        const axiosInstance = axios.create({
            baseURL: "https://limitless-lake-96203.herokuapp.com" + this.endpoint
        });
    }

}

export default AxiosConfig;