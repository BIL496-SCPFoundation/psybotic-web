import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../../utils/SectionProps';
import Button from "../../../elements/Button";
import ButtonGroup from "../../../elements/ButtonGroup";
import {useHistory} from 'react-router-dom';
import UserService from "../../../../utils/data/axios/services/UserService";
import Input from "../../../elements/Input";
import Select from "../../../elements/Select";

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
    const [maritalStatus, setMaritalStatus] = useState(typeof user === "undefined" ? "" : user.maritalStatus);

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
                        <form className="reveal-from-bottom"
                              style={{textAlign: "left", paddingLeft: "225px", paddingRight: "225px"}}>
                            <h3>First Name:</h3>
                            <Input type="text" placeholder="First Name" defaultValue={firstName} onChange={(event) => {
                                setFirstName(event.target.value)
                            }}
                            />
                            <h3>Last Name:</h3>
                            <Input type="text" placeholder="Last Name" defaultValue={lastName} onChange={(event) => {
                                setLastName(event.target.value)
                            }}
                            />
                            <h3>Gender:</h3>
                            <Select placeholder="Gender" defaultValue={gender} onChange={(event) => {
                                setGender(event.target.value)
                            }}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Select>
                            <h3>Mail:</h3>
                            <Input type="email" placeholder="E-mail" defaultValue={email} onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                            />
                            <h3>City:</h3>
                            <Input type="text" placeholder="City" defaultValue={city} onChange={(event) => {
                                setCity(event.target.value)
                            }}
                            />
                            <h3>Marital Status:</h3>
                            <Select placeholder="Marital Status" defaultValue={maritalStatus} onChange={(event) => {
                                setMaritalStatus(event.target.value)
                            }}>
                                <option value="now_married">Now Married</option>
                                <option value="widowed">Widowed</option>
                                <option value="divorced">Divorced</option>
                                <option value="separated">Separated</option>
                                <option value="never_married">Never Married</option>

                            </Select>
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
                                <Button type="button" className="button-dark reveal-from-bottom" onClick={() => {
                                    history.push("/profile");
                                }}>Return</Button>
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