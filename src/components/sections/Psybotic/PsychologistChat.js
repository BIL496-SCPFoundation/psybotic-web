import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import PsychologistService from "../../../utils/data/axios/services/PsyService";
import '../../../assets/css/chat.css';
import 'react-chat-elements/dist/main.css';

import { useHistory, useParams } from "react-router-dom";



const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const PsychologistChat = ({
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


    const history = useHistory();
    const [doc, setDoc] = useState(0);
    const [docs, setDocs] = useState([]);
    const psyService = new PsychologistService();
    const params = useParams();

    useEffect(() => {
        if (docs.length < 1) {
          psyService.confirmedApplicatns().then((res) => {
            res.data.forEach((doc) => {
              if (doc && doc.id && doc.id == params.id) {
                setDoc(doc);
                console.log("your doc founded");
                console.log(doc);
              }
            });
            setDocs(res.data);
          });
        }
      });


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <br />
            <br />

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Talk with a <span className="text-color-primary">{doc.firstName} - {doc.lastName}</span></h1>
            <div className="container">
                <div className={innerClasses}>
                    <section class="msger">
                        <header class="msger-header">
                            <div class="msger-header-title">
                                <i class="fas fa-comment-alt"></i> Psychologist Chat
                                </div>
                                <div class="msger-header-options">
                                    <span><i class="fas fa-cog">
                                        </i>
                                        </span>
                                        </div>
                                        </header>
                                        <main class="msger-chat">
                                            <div class="rce-container-mlist message-list">
                                                <div class="rce-mlist">
                                                   
                                                                <div class="rce-container-mbox">
                                                                    <div class="rce-mbox rce-mbox-right">
                                                                        <div class="rce-mbox-body">
                                                                            <div class="rce-mbox-title rce-mbox-title--clear">
                                                                                <div class="rce-avatar-container default default">
                                                                                    <img alt="" src={doc.imageURL} class="rce-avatar" />
                                                                                </div>
                                                                                <span>Hi there , I am Dr. {doc.firstName}</span>
                                                                            </div>
                                                                            <div class="rce-mbox-text">How can I help you ?
                                                                            </div>
                                                                            <div class="rce-mbox-time non-copiable" data-text="Now">
                                                                            </div>
                                                                        </div>
                                                                        <svg class="rce-mbox-right-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M0 0v20L20 0">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                        </div>
                                        </main>
                                       <form>
                                           <div className="row col-md-12">
                                                <div className="col-md-10">
                                            <input disabled="disabled" type="text" class="msger-input form-control" placeholder="Enter your message..." value=""/></div>
                                            <div className="col-md-2">
                                                
                                            <button  type="submit" class="button msger-send-btn button-primary form-control" disabled="disabled">Send
                                                </button>
                                            </div>
                                           </div>
                                           
                                                </form>
                                           
                        </section>
                </div>
                    </div>
        </section>
    );
}


PsychologistChat.propTypes = propTypes;
PsychologistChat.defaultProps = defaultProps;

export default PsychologistChat;
