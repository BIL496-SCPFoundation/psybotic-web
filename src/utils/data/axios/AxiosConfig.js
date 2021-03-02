import axios from 'axios';

class AxiosConfig {
    constructor(props) {
        this.endpoint = props;
        this.axiosInstance = axios.create({
            baseURL: "https://limitless-lake-96203.herokuapp.com" + this.endpoint
        });
    }

    findById(id){
        this.axiosInstance.request({method:"GET", url: "/findById", params:{id}}).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

}

export default AxiosConfig;