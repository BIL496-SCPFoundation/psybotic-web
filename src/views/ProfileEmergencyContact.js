import React from "react";
import EmergencyContact from "../components/sections/Psybotic/EmergencyContact";
import PathNameOperations from "../utils/PathNameOperations"

const ProfileEmergencyContact = (props) => {
    return (
        <>
            <EmergencyContact className="illustration-section-01" location={PathNameOperations.normalizePathName(props.location.pathname)}/>
        </>
    );
}
export default ProfileEmergencyContact;