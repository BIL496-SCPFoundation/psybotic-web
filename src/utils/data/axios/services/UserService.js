import AxiosConfig from "../AxiosConfig";

class UserService extends AxiosConfig{
    constructor(endpoint) {
        super("/users" + endpoint);
    }

    getData(userId){
        return this.axiosInstance.request({method:"GET", params:{userId}}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }
}
export default UserService;