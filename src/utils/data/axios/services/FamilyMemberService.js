import AxiosConfig from "../AxiosConfig";

class FamilyMemberService extends AxiosConfig{
    constructor() {
        super();
        this.endpoint = "/familyMembers"
    }
}