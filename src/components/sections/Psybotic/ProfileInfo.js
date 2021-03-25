import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import {useHistory} from "react-router-dom";
import UserService from "../../../utils/data/axios/services/UserService";
import getUser from '../../../utils/GetUser'


const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const ProfileInfo = ({
                         className,
                         userName,
                         topOuterDivider,
                         bottomOuterDivider,
                         topDivider,
                         bottomDivider,
                         hasBgColor,
                         invertColor,
                         pushLeft,
                         ...props
                     }) => {

    const outerClasses = classNames(
        'testimonial section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'testimonial-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: userName,
        paragraph: 'Welcome to your profile ' + userName + '. Here, you can check your info saved about you and edit it if you want.',
    };

    const history = useHistory();

    const [user, setUser] = useState({});
    const [familyMemberCount, setFamilyMemberCount] = useState("?");
    const [emergencyContactCount, setEmergencyContactCount] = useState("?");

    const OAuthUser = getUser();

    const userService = new UserService();

    if (Object.keys(OAuthUser).length !== 0 && Object.keys(user).length === 0 )  {
        userService.findById(OAuthUser.googleId).then((response) => {
            if (JSON.stringify(response.data) !== JSON.stringify(user))
                setUser(response.data);
        })

        userService.getData(OAuthUser.googleId, "/familyMembers").then((response) => {
            setFamilyMemberCount(response.data.length);
        })
        userService.getData(OAuthUser.googleId, "/emergencyContacts").then((response) => {
            setEmergencyContactCount(response.data.length);
        })
    }

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content"/>
                        <div className={tilesClasses}>

                            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                                <div className="tiles-item-inner">
                                    <div className="testimonial-item-content">
                                        <h4>Personal Info</h4>
                                        <p className="text-sm mb-0">
                                            <b className="text-color-high">First Name:</b> {user.firstName} <br/>
                                            <b className="text-color-high">Last Name:</b> {user.lastName} <br/>
                                            <b className="text-color-high">E-Mail: </b> {user.email} <br/>
                                            <b className="text-color-high">Gender: </b> {user.gender} <br/>
                                            <b className="text-color-high">City: </b> {user.city} <br/>
                                            <b className="text-color-high">Martial Status: </b> {user.maritalStatus}
                                            <br/>
                                        </p>
                                    </div>
                                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a style={{cursor: "pointer"}} onClick={(() => {
                        history.push("/table/profileData/submit", {user, prevPath: history.location.pathname})
                    })}>Edit</a>
                  </span>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner">
                                    <div className="testimonial-item-content">
                                        <h4>Family Member Info</h4>
                                        <p className="text-sm mb-0">
                                            You have <b className="text-color-high"> {familyMemberCount} </b> family
                                            member(s) saved to your profile. Please click the <span
                                            className="testimonial-item-link">Edit</span> button to see and edit them
                                        </p>
                                    </div>
                                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0" onClick={(() => {
                        history.push("/table/familyMember")
                    })}>Edit</a>
                  </span>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                                <div className="tiles-item-inner">
                                    <div className="testimonial-item-content">
                                        <h4>Emergency Contact</h4>
                                        <p className="text-sm mb-0">
                                            You have <b
                                            className="text-color-high"> {emergencyContactCount} </b> emergency
                                            contact(s) saved to your profile. Please click the <span
                                            className="testimonial-item-link">Edit</span> button to see and edit them
                                        </p>
                                    </div>
                                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0" onClick={(() => {
                        history.push("/table/emergencyContact")
                    })}>Edit</a>
                  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    ProfileInfo.propTypes = propTypes;
    ProfileInfo.defaultProps = defaultProps;

    export default ProfileInfo;