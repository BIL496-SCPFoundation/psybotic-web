import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import DataTable from "../../elements/DataTable";
import {FAMILY_MEMBER} from "../../../utils/data/DataFormats";
import AxiosConfig from "../../../utils/data/axios/AxiosConfig"
const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Homepage = ({
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
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );
    const axios = new AxiosConfig();

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Edit Family Members
                        </h1>
                        <DataTable columns={FAMILY_MEMBER} data_rows={[{
                            firstName: "name1",
                            lastName: "lastname1",
                            mail: "gmail",
                            phone: "123",
                        }, {
                            firstName: "name2",
                            lastName: "lastname2",
                            mail: "yahoo",
                            phone: "345",
                        }, {
                            firstName: "name3",
                            lastName: "lastname3",
                            mail: "gmail",
                            phone: "890",
                        }]}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

export default Homepage;