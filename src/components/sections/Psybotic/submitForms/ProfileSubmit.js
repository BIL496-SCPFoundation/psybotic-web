import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../../utils/SectionProps';
import Button from "../../../elements/Button";
import ButtonGroup from "../../../elements/ButtonGroup";
import {useHistory} from 'react-router-dom';
import PathNameOperations from "../../../../utils/PathNameOperations";
import UserService from "../../../../utils/data/axios/services/UserService";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ProfileSubmit = ({
                           className,
                           topOuterDivider,
                           bottomOuterDivider,
                           topDivider,
                           bottomDivider,
                           hasBgColor,
                           invertColor,
                           location,
                           ...props
                       }) => {

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );
    const history = useHistory();
    const user = history.location.state.user;
    const userService = new UserService();


    const [firstName, setFirstName] = useState(typeof user === "undefined" ? "" : user.firstName);
    const [lastName, setLastName] = useState(typeof user === "undefined" ? "" : user.lastName);
    const [email, setEmail] = useState(typeof user === "undefined" ? "" : user.email);
    const [gender, setGender] = useState(typeof user === "undefined" ? "" : user.gender);
    const [city, setCity] = useState(typeof user === "undefined" ? "" : user.city);
    const [maritalStatus, getMaritalStatus] = useState(typeof user === "undefined" ? "" : user.maritalStatus);

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Edit Your Profile Info
                        </h1>
                        <form className="reveal-from-bottom">
                            <h3>First Name:</h3>
                            <input
                                type='text'
                                defaultValue={firstName}
                                onChange={(event) => {
                                    setFirstName(event.target.value)
                                }}/>
                            <h3>Last Name:</h3>
                            <input
                                type='text'
                                defaultValue={lastName}
                                onChange={(event) => {
                                    setLastName(event.target.value)
                                }}/>
                            <h3>Gender:</h3>
                            <input
                                type='text'
                                defaultValue={gender}
                                onChange={(event) => {
                                    setGender(event.target.value)
                                }}/>
                            <h3>Email:</h3>
                            <input
                                type='text'
                                defaultValue={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}/>
                            <h3>City:</h3>
                            <input
                                type='text'
                                defaultValue={city}
                                onChange={(event) => {
                                    setCity(event.target.value)
                                }}/>
                            <h3>Maritial Status:</h3>
                            <input
                                type='text'
                                defaultValue={maritalStatus}
                                onChange={(event) => {
                                    getMaritalStatus(event.target.value)
                                }}/>
                            <br/>
                            <br/>
                            <ButtonGroup>
                                <Button type="button" className="button-secondary reveal-from-bottom" onClick={() => {
                                    userService.update({
                                        id: "1",
                                        firstName,
                                        lastName,
                                        email,
                                        gender,
                                        city,
                                        maritalStatus
                                    }).then((response) => {
                                        console.log(response);
                                        alert("Your info has been updated!");
                                    })
                                }}>Edit</Button>
                                <Button type="button" className="button-dark reveal-from-bottom">Return</Button>
                            </ButtonGroup>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

ProfileSubmit.propTypes = propTypes;
ProfileSubmit.defaultProps = defaultProps;

export default ProfileSubmit;