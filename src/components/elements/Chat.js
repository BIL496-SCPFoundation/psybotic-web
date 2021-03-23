import React, {useRef, useState, useEffect} from "react";
import {MessageList} from "react-chat-elements";
import Button from "./Button";
import '../../assets/css/chat.css'
import 'react-chat-elements/dist/main.css';

const Chat = () => {

    const [chatMessages, setChatMessages] = useState([{
        position: 'right',
        type: 'text',
        text: ' Hi, welcome to Psybotic! Go ahead and send me a message. 😄',
        avatar: 'https://image.flaticon.com/icons/svg/327/327779.svg',
        title: "ChatBot",
        date: new Date(),
    }])
    const [message, setMessage] = useState("")

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'});
    }

    useEffect(scrollToBottom);

    return (
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

export default Chat;