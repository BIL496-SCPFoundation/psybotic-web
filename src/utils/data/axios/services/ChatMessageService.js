import AxiosConfig from "../AxiosConfig";

class ChatMessageService extends AxiosConfig{
    constructor() {
        super("/chatMessages");
    }
}
export default ChatMessageService;