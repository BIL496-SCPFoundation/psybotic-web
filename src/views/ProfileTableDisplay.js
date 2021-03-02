import React from "react";
import FamilyMember from "../components/sections/Psybotic/FamilyMember";
import EmergencyContact from "../components/sections/Psybotic/EmergencyContact";

const ProfileTableDisplay = (props) => {
    const pathname = props.location.pathname
    if (pathname === "/table/familyMember")
        return (
            <>
                <FamilyMember/>
            </>
        );
    else if(pathname === "/table/emergencyContact")
        return (
            <>
                <EmergencyContact/>
            </>
        );
}
export default ProfileTableDisplay;