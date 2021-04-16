import AxiosConfig from "../AxiosConfig";

class ArticleService extends AxiosConfig{
    constructor() {
        super("/articles");
    }
}
export default ArticleService;