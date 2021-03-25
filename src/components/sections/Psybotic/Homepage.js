import React, {useContext} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import Image from '../../elements/Image';

import UserService from "../../../utils/data/axios/services/UserService";
import {useHistory} from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}
firebase.initializeApp({
    apiKey: "AIzaSyCt_3a9ovNugndR3hu6455stXrf7M-WlLA",
    authDomain: "psybotic.firebaseapp.com",
    projectId: "psybotic",
    storageBucket: "psybotic.appspot.com",
    messagingSenderId: "206287057539",
    appId: "1:206287057539:web:2d793dbd3e549614aba1b6",
    measurementId: "G-GFH4G8EGNY"
});
const auth = firebase.auth();
const Homepage = ({
                      className,
                      topOuterDivider,
                      bottomOuterDivider,
                      topDivider,
                      bottomDivider,
                      hasBgColor,
                      invertColor,
                      ...props
                  }) => {
    const userService = new UserService();

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

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((response) => {
            let user = response.additionalUserInfo.profile;
            let userData = {
                uid: response.user.uid,
                googleId: user.id,
                firstName: user.given_name,
                lastName: user.family_name,
                email: user.email,
                imageUrl: user.picture
            }
            userService.login(userData).then(() => history.push({
                pathname: '/Mainmenu'
            }));
        });
    }


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Welcome to <span className="text-color-primary">Psybotic</span>
                        </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">

                            </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <ButtonGroup>
                                    <Button className="button-primary" onClick={signInWithGoogle}>Sign in with
                                        Google</Button>
                                    <Button
                                        onClick={(() => {
                                            history.push("/Mainmenu")
                                        })}
                                        tag="a" color="dark" wideMobile href="#0">
                                        Try As Guest
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px"
                         data-reveal-delay="800">

                        <Image
                            className="has-shadow"
                            src={require('../../../assets/images/PsyboticLogo.PNG')}
                            alt="Hero"
                            width={696}
                            height={504}/>

                    </div>
                </div>
            </div>
        </section>
    );
}

Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

export default Homepage;
