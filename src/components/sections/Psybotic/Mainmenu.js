import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';

import {Link, useHistory} from 'react-router-dom';

import ProfileCard from "../../elements/ProfileCard";

import UserService from "../../../utils/data/axios/services/UserService";
import {Button, Dropdown} from "react-bootstrap";



const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const MainMenu = ({
                      className,
                      topOuterDivider,
                      bottomOuterDivider,
                      topDivider,
                      bottomDivider,
                      hasBgColor,
                      invertColor,
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
        'hero-inner section-inner row col-md-12',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const [user, setUser] = useState({name: "", age: "", email: "", gender: "", city: "", maritalStatus: ""});
    const [familyMemberCount, setFamilyMemberCount] = useState("?");
    const [emergencyContactCount, setEmergencyContactCount] = useState("?");
    var userService = new UserService();

    userService.findById("1").then((response) => {
        if (JSON.stringify(response.data) !== JSON.stringify(user))
            setUser(response.data);
    })


    const history = useHistory();

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <div className="col-md-6" >
                        <ProfileCard user={user} />
                    </div>
                    <div className="col-md-6">
                        <div >
                            <Button
                                onClick={(() => {
                                    history.push("/ChatPage", {user})
                                })}
                                variant="outline-danger" size="lg" block>
                                Chat With Our AI BOT !
                            </Button>
                            <Button
                                onClick={(() => {
                                    history.push("/SelectPsychologist", {user})
                                })}
                                variant="dark" size="lg" block>
                                Chat With A Verified Psychologist
                            </Button>
                            <Button
                                onClick={(() => {
                                    history.push("/LearnMore", {user})
                                })}
                                variant="dark" size="lg" block>
                                Learn More..
                            </Button>
                        </div>
                    </div>


                    <div className="hero-content">

                        <div className="container-xs">

                            <div>
                            </div>

                        </div>
                    </div>
                    <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">

                    </div>
                </div>
            </div>
        </section>
    );
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
