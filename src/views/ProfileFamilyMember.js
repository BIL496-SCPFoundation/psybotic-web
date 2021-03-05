import React from "react";
import FamilyMember from "../components/sections/Psybotic/FamilyMember";
import PathNameOperations from "../utils/PathNameOperations";

const ProfileFamilyMember = (props) => {
    return (
        <>
            <FamilyMember className="illustration-section-01" location={PathNameOperations.normalizePathName(props.location.pathname)}/>
        </>
    );
}
export default ProfileFamilyMember;