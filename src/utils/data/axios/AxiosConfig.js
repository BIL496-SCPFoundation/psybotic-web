import axios from 'axios';

class AxiosConfig {
    constructor(props) {
        this.endpoint = props;
        this.axiosInstance = axios.create({
            baseURL: "https://limitless-lake-96203.herokuapp.com" + this.endpoint
        });
    }

    insert(data){
        return this.axiosInstance.request({method:"POST", url: "insert", data}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }

    update(data){
        return this.axiosInstance.request({method:"POST", url: "update", data}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }

    delete(id){
        return this.axiosInstance.request({method:"DELETE", url:"deleteById", params:{id}}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }
}

export default AxiosConfig;