import AxiosConfig from "../AxiosConfig";

class FirebaseService extends AxiosConfig{
    constructor() {
        super("/firebase");
    }
    sendMessage(data){
        return this.axiosInstance.request({method:"POST", url:"/sendMessage", data}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }

}
export default FirebaseService;