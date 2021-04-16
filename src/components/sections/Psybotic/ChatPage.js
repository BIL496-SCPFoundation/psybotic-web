import React from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
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
                    <Chat type="ChatBot2"/>
                </div>
            </div>
        </section>
    );
}


ChatPage.propTypes = propTypes;
ChatPage.defaultProps = defaultProps;

export default ChatPage;
