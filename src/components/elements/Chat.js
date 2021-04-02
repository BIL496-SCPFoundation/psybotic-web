import React, {useRef, useState, useEffect} from "react";
import {MessageList} from "react-chat-elements";
import Button from "./Button";
import '../../assets/css/chat.css'
import 'react-chat-elements/dist/main.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import getUser from '../../utils/GetUser'

const firestore = firebase.firestore();
const analytics = firebase.analytics();

//https://stackoverflow.com/questions/37139525/firebase-chat-app-query-messages-optimize-query-that-should-be-or-or-improve
const Chat = () => {

    const currentUser = getUser();

    const receiverId = "chatbot";
    const senderId = currentUser.googleId;
    const id = senderId + receiverId

    const messagesEndRef = useRef(null);

    const messagesRef = firestore.collection('messages');
    const incoming_query = messagesRef.where("chatRoomId", "==", id);
    const [messages] = useCollectionData(incoming_query, {idField: 'id'});
    const messageList = (typeof messages === "undefined") ? [] : getMessages([...messages], senderId, currentUser);

    const [formValue, setFormValue] = useState('');

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'});
    }


    const sendMessage = async () => {
        await messagesRef.add({
            chatRoomId: senderId + receiverId,
            message: formValue,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            senderId: currentUser.googleId,
            receiverId: "chatbot",
            senderFirstName: currentUser.firstName,
            senderLastName: currentUser.lastName,
        })

        await messagesRef.add({
            chatRoomId: senderId + receiverId,
            message: "Hello I'm not implemented yet. Please try again later!",
            date: firebase.firestore.FieldValue.serverTimestamp(),
            senderId: "chatbot",
            receiverId: currentUser.googleId,
            senderFirstName: null,
            senderLastName: null,
        })

        setFormValue('');
        scrollToBottom();
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
                    dataSource={messageList}/>
                <div ref={messagesEndRef}/>
            </main>

            <form className="msger-inputarea" onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
            }}>
                <input type="text" className="msger-input" placeholder="Enter your message..."
                       onKeyDown={(event) => {
                           if (formValue !== "" && event.keyCode === 13 && event.shiftKey === false) {
                               sendMessage();
                               setFormValue("");
                           }
                       }}

                       value={formValue || ''} onChange={(event) => {
                    setFormValue(event.target.value);
                }}/>
                <Button type="submit" disabled={!formValue} className="msger-send-btn button-primary">Send</Button>
            </form>

        </section>
    );
}

function getMessages(messages, senderId, currentUser) {

    let messageList = [];
    messages.forEach((data) => {
        messageList.push({
            position: (data.senderId === senderId) ? "left" : "right",
            type: 'text',
            text: data.message,
            avatar: (data.senderId === senderId) ? currentUser.imageUrl : 'https://image.flaticon.com/icons/svg/327/327779.svg',
            title: (data.senderId === senderId) ? "You" : "Chat Bot",
            date: (data.date === null) ? new Date() : data.date.toDate(),
        });
    });

    messageList.sort((a, b) => {
        return (a.date.getTime() > b.date.getTime()) ? 1 : -1;
    });

    return messageList;
}


export default Chat;