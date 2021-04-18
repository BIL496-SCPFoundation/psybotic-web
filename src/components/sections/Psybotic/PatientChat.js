import React, {useState, useRef, useEffect} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import PsychologistService from "../../../utils/data/axios/services/PsyService";
import '../../../assets/css/chat.css';
import 'react-chat-elements/dist/main.css';

import {useHistory, useParams} from "react-router-dom";
import Chat from "../../elements/Chat";
import getUser from "../../../utils/GetUser";
import UserService from "../../../utils/data/axios/services/UserService";


const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const PatientChat = ({
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



    const params = useParams();
    const [user, setUser] = useState({});
    const userService = new UserService();



    useEffect(() => {
            userService.findById(params.id).then((response) => {
                if (JSON.stringify(response.data) !== JSON.stringify(user))
                    setUser(response.data);
            })
    });


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <br/>
            <br/>

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Talking with <span className="text-color-primary">{user.firstName} {user.lastName}</span></h1>

            <div className="container">
                <div className={innerClasses}>
                    <Chat type="psychologist" receiver={user.id} psy={user}/>
                </div>
            </div>
        </section>
    );
}


PatientChat.propTypes = propTypes;
PatientChat.defaultProps = defaultProps;

export default PatientChat;
