import AxiosConfig from "../AxiosConfig";

class ChatMessageService extends AxiosConfig{
    constructor() {
        super("/chatMessages");
    }
    chatRooms(userId) {
        return this.axiosInstance.request({method: "GET", url: "/chatRooms", params:{userId}}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }
}
export default ChatMessageService;