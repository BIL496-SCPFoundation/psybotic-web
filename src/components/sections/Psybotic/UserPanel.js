import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import Grid from "../../elements/Grid";
import UserService from "../../../utils/data/axios/services/UserService";
import {USER} from "../../../utils/data/DataFormats";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const UserPanel = ({
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

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-xl">
                <div className={innerClasses}>
                    <div className="hero-content" >
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            User Panel
                        </h1>
                        <Grid service={userService} dataFormat={USER} dataPath={"users"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

UserPanel.propTypes = propTypes;
UserPanel.defaultProps = defaultProps;

export default UserPanel;