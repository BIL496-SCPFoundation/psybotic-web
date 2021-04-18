import AxiosConfig from "../AxiosConfig";

class ArticleService extends AxiosConfig{
    constructor() {
        super("/articles");
    }
    getChildArticles = () => {
        return this.axiosInstance.request({method: "GET", url: '/findByAgeRange?ageRange=CHILD&count=10'}).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        });
    }
    getYoungAdultArticles = () => {
        return this.axiosInstance.request({method: "GET", url: '/findByAgeRange?ageRange=YOUNG_ADULT&count=10'}).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        });
    }
    getAdultArticles = () => {
        return this.axiosInstance.request({method: "GET", url: '/findByAgeRange?ageRange=ADULT&count=10',data : {ageRange : 'ADULT',count : 10}}).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        });
    }
    getOldArticles = () => {
        return this.axiosInstance.request({method: "GET", url: '/findByAgeRange?ageRange=OLD&count=10',data : {ageRange : 'OLD',count : 10}}).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        });
    }
}
export default ArticleService;