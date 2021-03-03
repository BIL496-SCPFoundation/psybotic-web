import AxiosConfig from "../AxiosConfig";

class EmergencyContactService extends AxiosConfig{
    constructor() {
        super("/emergencyContacts");
    }
}
export default EmergencyContactService;