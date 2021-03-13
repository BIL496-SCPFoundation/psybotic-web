import React, {useState ,useRef, useEffect} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';

import '../../../assets/css/chat.css'
import UserService from "../../../utils/data/axios/services/UserService";
import {useHistory} from "react-router-dom";
import {MessageList} from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import Button from "../../elements/Button";

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
    const [chatMessages, setChatMessages] = useState([{
        position: 'right',
        type: 'text',
        text: ' Hi, welcome to Psybotic! Go ahead and send me a message. 😄',
        avatar: 'https://image.flaticon.com/icons/svg/327/327779.svg',
        title: "ChatBot",
        date: new Date(),
    }])
    const [message, setMessage] = useState("")

    const userService = new UserService();

    userService.findById("1").then((response) => {
        if (JSON.stringify(response.data) !== JSON.stringify(user))
            setUser(response.data);
    })

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        //TODO: Fix auto scroll
        //messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(scrollToBottom);

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
                                <MessageList
                                    className='message-list'
                                    lockable={true}
                                    toBottomHeight={'100%'}
                                    dataSource={chatMessages}/>
                                <div ref={messagesEndRef}/>
                            </main>

                            <div className="msger-inputarea">
                                <input type="text" className="msger-input" placeholder="Enter your message..."
                                       onKeyDown={(event) => {
                                           if (message !== "" && event.keyCode === 13 && event.shiftKey === false) {
                                               setChatMessages(prevState => ([...prevState, getMessageObject(message)]));
                                               setMessage("");
                                           }
                                       }}

                                       value={message || ''} onChange={(event) => {
                                    setMessage(event.target.value);
                                }}/>
                                <Button type="button" className="msger-send-btn button-primary"
                                        onClick={() => {
                                            if (message !== "") {
                                                setChatMessages(prevState => ([...prevState, getMessageObject(message)]));
                                                setMessage("");
                                            }
                                        }}>Send</Button>
                            </div>
                        </section>
                    </>
                </div>
            </div>
        </section>
    );
}

function getMessageObject(message) {
    return {
        position: 'left',
        type: 'text',
        text: message,
        avatar: 'https://image.flaticon.com/icons/svg/145/145867.svg',
        title: "You",
        date: new Date(),
    }

}


ChatPage.propTypes = propTypes;
ChatPage.defaultProps = defaultProps;

export default ChatPage;
