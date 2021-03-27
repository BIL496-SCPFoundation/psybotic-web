import React, {useState, useRef, useEffect} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import UserService from "../../../utils/data/axios/services/UserService";
import {useHistory} from "react-router-dom";
import Chat from "../../../components/elements/Chat"


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

    const userService = new UserService();

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
            <br/>
            <br/>

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Talk with a <span className="text-color-primary">Chat Bot</span></h1>
            <div className="container">
                <div className={innerClasses}>
                    <Chat/>
                </div>
            </div>
        </section>
    );
}


ChatPage.propTypes = propTypes;
ChatPage.defaultProps = defaultProps;

export default ChatPage;
