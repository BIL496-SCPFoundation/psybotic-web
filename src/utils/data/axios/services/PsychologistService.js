import AxiosConfig from "../AxiosConfig";

class PsychologistService extends AxiosConfig {
    constructor() {
        super("/psychologists");
    }
}
export default PsychologistService;