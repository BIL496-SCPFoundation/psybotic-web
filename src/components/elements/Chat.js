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
import ChatMessageService from "../../utils/data/axios/services/ChatMessageService";

const firestore = firebase.firestore();
const analytics = firebase.analytics();

//https://stackoverflow.com/questions/37139525/firebase-chat-app-query-messages-optimize-query-that-should-be-or-or-improve
const   Chat = ({type, receiver, psy}) => {

    const currentUser = getUser();

    const receiverId = receiver;
    const senderId = currentUser.googleId;
    const id = senderId + receiverId

    const messagesEndRef = useRef(null);

    const messagesRef = firestore.collection('chats/'+ type + '/' + id);
    const incoming_query = messagesRef.orderBy('date');
    const [messages] = useCollectionData(incoming_query, {idField: 'id'});
    const chatMessageService = new ChatMessageService();

    const messageList = (typeof messages === "undefined") ? [] : getMessages([...messages], senderId, currentUser, type, psy);

    const [formValue, setFormValue] = useState('');

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'});
    }


    const sendMessage = async () => {
        /*
        await messagesRef.add({
            message: formValue,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            senderId: currentUser.googleId,
            receiverId: receiverId,
            senderFirstName: currentUser.firstName,
            senderLastName: currentUser.lastName,
        })*/
        console.log({
            message: formValue,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            chatRoomId: id,
            senderId: currentUser.googleId,
            receiverId: receiverId,
            senderFirstName: currentUser.firstName,
            senderLastName: currentUser.lastName,
        });

        chatMessageService.insert({
            message: formValue,
            date: new Date(),
            chatRoomId: id,
            senderId: currentUser.googleId,
            receiverId: receiverId,
            senderFirstName: currentUser.firstName,
            senderLastName: currentUser.lastName,
        }).then((res)=>{
            console.log(res);
            setFormValue('');
            scrollToBottom();
        })
    }

    useEffect(scrollToBottom);

    return (
        <section className="msger">
            <header className="msger-header">
                <div className="msger-header-title">
                    <i className="fas fa-comment-alt"></i> {(type === "chatbot") ?  "AI Chat by Psybotic": "Talk with a Psychologist"}
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

function getMessages(messages, senderId, currentUser, type, psy) {
    let messageList = [];
    messages.forEach((data) => {
        if(type === "chatbot") {
            messageList.push({
                position: (data.senderId === senderId) ? "left" : "right",
                type: 'text',
                text: data.message,
                avatar: (data.senderId === senderId) ? currentUser.imageUrl : 'https://image.flaticon.com/icons/svg/327/327779.svg',
                title: (data.senderId === senderId) ? "You" : "Chat Bot",
                date: (data.date === null) ? new Date() : data.date.toDate(),
            });
        } else {
            messageList.push({
                position: (data.senderId === senderId) ? "left" : "right",
                type: 'text',
                text: data.message,
                avatar: (data.senderId === senderId) ? currentUser.imageUrl : psy.imageURL,
                title: (data.senderId === senderId) ? "You" : data.senderFirstName +" "+ data.senderLastName ,
                date: (data.date === null) ? new Date() : data.date.toDate(),
        })
        }
    });

    return messageList;
}


export default Chat;