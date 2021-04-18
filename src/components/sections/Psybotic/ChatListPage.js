import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import Grid from "../../elements/Grid";
import UserService from "../../../utils/data/axios/services/UserService";
import {USER} from "../../../utils/data/DataFormats";
import {ChatList} from 'react-chat-elements';
import Button from "../../elements/Button";
import {useHistory} from "react-router-dom";
import ChatMessageService from "../../../utils/data/axios/services/ChatMessageService";
import getUser from '../../../utils/GetUser';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ChatListPage = ({
                          className,
                          topOuterDivider,
                          bottomOuterDivider,
                          topDivider,
                          bottomDivider,
                          hasBgColor,
                          invertColor,
                          location,
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
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    let userService = new UserService();
    let chatMessageService = new ChatMessageService();
    const oAuthUser = getUser()
    const history = useHistory();
    const [messageList, setMessageList] = useState(null);

    if (typeof oAuthUser.googleId !== "undefined") {
        chatMessageService.chatRooms(oAuthUser.googleId).then((res) => {
            if (messageList === null) {
                let mesArr = []
                res.data.forEach(((value, index) => {
                    mesArr.push({
                        avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                        alt: 'Reactjs',
                        title: value.lastMessage.senderFirstName + " " + value.lastMessage.senderLastName,
                        subtitle: value.lastMessage.message,
                        date: value.lastMessage.date,
                        unread: 0,
                        userId: value.user.googleId
                    })
                }))
                setMessageList(mesArr);
            }
        })
    }



    console.log(messageList);
    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-xl">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Your Ongoing Chats
                        </h1>
                        <ChatList
                            onClick={(chatData) => {
                                history.push("/Chat/Patient/" + chatData.userId, {
                                    imageUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                                })
                            }}
                            className='chat-list'
                            dataSource={(messageList === null) ? [] : messageList}/>
                        <br/>
                        <br/>

                        <Button type="submit" className="button-dark reveal-from-bottom" onClick={() => {
                            history.push("/MainMenu");
                        }}>Return</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

ChatListPage.propTypes = propTypes;
ChatListPage.defaultProps = defaultProps;

export default ChatListPage;