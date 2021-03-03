import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import DataTable from "../../elements/DataTable";
import {EMERGENCY_CONTACT} from "../../../utils/data/DataFormats";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const EmergencyContact = ({
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
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Edit Emergency Contacts
                        </h1>
                        <DataTable location={location} columns={EMERGENCY_CONTACT} data_rows={[{
                            firstName: "Mert Onur",
                            lastName: "Cakiroglu",
                            type: "brother",
                            mail: "cakiroglu.mert@gmail.com",
                            phone: "0530282823",
                        }, {
                            firstName: "name2",
                            lastName: "lastname2",
                            type: "sister",
                            mail: "yahoo",
                            phone: "345",
                        }, {
                            firstName: "name3",
                            lastName: "lastname3",
                            type: "uncle",
                            mail: "gmail",
                            phone: "890",
                        }]}/>
                        <br/>
                    </div>
                </div>
            </div>
        </section>
    );
}

EmergencyContact.propTypes = propTypes;
EmergencyContact.defaultProps = defaultProps;

export default EmergencyContact;