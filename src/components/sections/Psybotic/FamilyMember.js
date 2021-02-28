import React from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../utils/SectionProps';
import DataTable from "../../elements/DataTable";
import {FAMILY_MEMBER} from "../../../dataFormats/dataFormats";
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

    const dummyData =[{
        firstName: "Mert",
        lastName: "Onur",
        mail: "gmail",
        phone: "123",}, {
        firstName: "Epic",
        lastName: "Gamer",
        mail: "yahoo",
        phone: "345",}]
    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <DataTable columns={FAMILY_MEMBER} data={dummyData}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

export default Homepage;