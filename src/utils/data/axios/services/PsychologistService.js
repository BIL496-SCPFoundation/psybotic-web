import AxiosConfig from "../AxiosConfig";

class PsychologistService extends AxiosConfig{
    constructor() {
        super("/psychologists");
    }

    getApplicants = () => {
        return this.axiosInstance.request({method: "GET", url: '/applicants'}).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        });
    }

    getOldApplicants = () => {
        return this.axiosInstance.request({method:"GET", url: '/oldApplicants'}).then((response)=>{
            return response;
        }).catch((error) => {
            throw error;
        })

    }

    confirmApplicant = (item) => {
        item.approved = true;
        return this.axiosInstance.request({method: "POST", url: '/update', data: item}).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        });
    };

    rejectApplicant = (item) => {
        item.rejected = true;
        return this.axiosInstance.request({method: "POST", url: '/update', data: item}).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        });
    }

    cancelDecision = (item) => {
        item.rejected = false;
        item.approved = false;
        return this.axiosInstance.request({method: "POST", url: '/update', data: item}).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        });

    }

}
export default PsychologistService;
