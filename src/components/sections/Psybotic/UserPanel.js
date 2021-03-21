import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import Grid from "../../elements/Grid";
import '../../../assets/css/agGrid.css'


const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const FamilyMember = ({
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
                        <Grid/>
                    </div>
                </div>
            </div>
        </section>
    );
}

FamilyMember.propTypes = propTypes;
FamilyMember.defaultProps = defaultProps;

export default FamilyMember;