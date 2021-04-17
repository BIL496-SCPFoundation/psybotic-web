import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import Grid from "../../elements/Grid";
import UserService from "../../../utils/data/axios/services/UserService";
import {USER} from "../../../utils/data/DataFormats";
import { ChatList } from 'react-chat-elements';
import Button from "../../elements/Button";
import {useHistory} from "react-router-dom";

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
    const history = useHistory();

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-xl">
                <div className={innerClasses}>
                    <div className="hero-content" >
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Your Ongoing Chats
                        </h1>
                        <ChatList
                            className='chat-list'
                            dataSource={[
                                {
                                    avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                                    alt: 'Reactjs',
                                    title: 'Mert Onur Çakıroğlu',
                                    subtitle: 'What are you doing?',
                                    date: new Date(),
                                    unread: 0,
                                },
                                {
                                    avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                                    alt: 'Reactjs',
                                    title: 'Muhammed Emre Durdu',
                                    subtitle: 'Hi!',
                                    date: new Date(),
                                    unread: 0,
                                },
                                {
                                    avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                                    alt: 'Reactjs',
                                    title: 'Selen Yel',
                                    subtitle: 'I am fine',
                                    date: new Date(),
                                    unread: 0,
                                },
                            ]}/>
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