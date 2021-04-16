import React, {useState, useRef, useEffect} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import PsychologistService from "../../../utils/data/axios/services/PsyService";
import '../../../assets/css/chat.css';
import 'react-chat-elements/dist/main.css';

import {useHistory, useParams} from "react-router-dom";
import Chat from "../../elements/Chat";


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
            <br/>
            <br/>

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Talking with <span className="text-color-primary">{doc.firstName} {doc.lastName}</span></h1>

            <div className="container">
                <div className={innerClasses}>
                    <Chat type="psychologist" receiver={doc.id} psy={doc}/>
                </div>
            </div>
        </section>
    );
}


PsychologistChat.propTypes = propTypes;
PsychologistChat.defaultProps = defaultProps;

export default PsychologistChat;
