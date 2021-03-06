import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';

import '../../../assets/css/chat.css'
import UserService from "../../../utils/data/axios/services/UserService";
import {useHistory} from "react-router-dom";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ChatPage = ({
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
                    <>
                        <section className="msger">
                            <header className="msger-header">
                                <div className="msger-header-title">
                                    <i className="fas fa-comment-alt"></i> AI Chat by Psybotic
                                </div>
                                <div className="msger-header-options">
                                    <span><i className="fas fa-cog"></i></span>
                                </div>
                            </header>

                            <main className="msger-chat">
                                <div className="msg left-msg">
                                    <div
                                        className="msg-img"
                                        style={{backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)'}}

                                    />

                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">AI BOT</div>
                                            <div className="msg-info-time">now</div>
                                        </div>

                                        <div className="msg-text">
                                            Hi, welcome to Psybotic! Go ahead and send me a message. 😄
                                        </div>
                                    </div>
                                </div>

                                <div className="msg right-msg">
                                    <div
                                        className="msg-img"
                                        style={{backgroundImage : 'url(https://image.flaticon.com/icons/svg/145/145867.svg)'}}

                                    />

                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">{user.firstName}</div>
                                            <div className="msg-info-time">now</div>
                                        </div>

                                        <div className="msg-text">
                                            I want to discuss a problem of mine with you.
                                        </div>
                                    </div>
                                </div>
                            </main>

                            <form className="msger-inputarea">
                                <input type="text" className="msger-input" placeholder="Enter your message..."/>
                                <button type="submit" className="msger-send-btn">Send</button>
                            </form>
                        </section>
                    </>
                </div>
            </div>
        </section>
    );
}

ChatPage.propTypes = propTypes;
ChatPage.defaultProps = defaultProps;

export default ChatPage;
