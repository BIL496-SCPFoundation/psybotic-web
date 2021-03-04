import AxiosConfig from "../AxiosConfig";

class FamilyMemberService extends AxiosConfig{
    constructor() {
        super("/familyMembers");
    }

}
export default FamilyMemberService;