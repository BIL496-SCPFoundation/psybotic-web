import AxiosConfig from "../AxiosConfig";

class UserService extends AxiosConfig{
    constructor() {
        super("/users");
    }

    findByPagination(size){
        return this.axiosInstance.request({method:"GET", params:{size}},).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }

    findById(id){
        return this.axiosInstance.request({method:"GET", url:"/findById", params:{id}}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }

    update(data){
        return this.axiosInstance.request({method:"POST", url:"/update", data}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }


    getData(userId, url){
        return this.axiosInstance.request({method:"GET", params:{userId}, url}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }
}
export default UserService;