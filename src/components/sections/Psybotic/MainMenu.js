import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';

import {useHistory} from 'react-router-dom';

import ProfileCard from "../../elements/ProfileCard";

import {Button, Dropdown} from "react-bootstrap";
import {faRobot, faUserMd, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'firebase/auth';
import getUser from '../../../utils/GetUser'
import UserService from "../../../utils/data/axios/services/UserService";

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

    //apconst temp = props.location.state;

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const history = useHistory();


    const innerClasses = classNames(
        'hero-inner section-inner row col-md-12',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const OAuthUser = getUser();
    const [user, setUser] = useState({});
    const userService = new UserService();

    if (Object.keys(OAuthUser).length !== 0 && Object.keys(user).length === 0) {
        userService.findById(OAuthUser.googleId).then((response) => {
            if (JSON.stringify(response.data) !== JSON.stringify(user))
                setUser(response.data);
        })
    }

    console.log(user);

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <div className="col-md-6">
                        <ProfileCard user={user}/>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <Button
                                onClick={(() => {
                                    history.push("/ChatPage", {user})
                                })}
                                variant="outline-danger" size="lg" block>
                                <FontAwesomeIcon icon={faRobot}/> Chat With Our AI BOT !
                            </Button>
                            <Button
                                onClick={(() => {
                                    history.push("/SelectPsychologist", {user})
                                })}
                                variant="dark" size="lg" block>
                                <FontAwesomeIcon icon={faUserMd}/> Chat With A Verified Psychologist
                            </Button>           
                            <Button
                                onClick={(() => {
                                    history.push("/ApplyPsy", {user})
                                })}
                                variant="dark" size="lg" block
                            >
                                Apply as a Psychologist
                            </Button>
                            {user.isAdmin && <Button
                                onClick={(() => {
                                    history.push("/admin", {user})
                                })}
                                variant="dark" size="lg" block>
                                Admin Page
                            </Button>}
                        </div>
                    </div>


                    <div className="hero-content">

                        <div className="container-xs">

                            <div>
                            </div>

                        </div>
                    </div>
                    <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px"
                         data-reveal-delay="800">

                    </div>
                </div>
            </div>
        </section>
    );
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
