import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../../utils/SectionProps';
import DataTable from "../../../elements/DataTable";
import {FAMILY_MEMBER} from "../../../../dataFormats/dataFormats";
import Button from "../../../elements/Button";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const FamilyMemberSubmit = ({
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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Add New Family Members
                        </h1>
                        <form onSubmit={(data)=>{
                            alert(firstName + " " + lastName + " "+ email + " " + phone);
                        }}>
                            <h3>First Name:</h3>
                            <input
                                type='text'
                                onChange={(event) => {
                                    setFirstName(event.target.value)
                                }} />
                            <h3>Last Name:</h3>
                            <input
                                type='text'
                                onChange={(event) => {
                                    setLastName(event.target.value)
                                }} />
                            <h3>Phone:</h3>
                            <input
                                type='text'
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                            <h3>Mail:</h3>
                            <input
                                type='text'
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }} />
                            <br/>
                            <br/>
                            <Button type="submit" className="button-secondary">Add</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

FamilyMemberSubmit.propTypes = propTypes;
FamilyMemberSubmit.defaultProps = defaultProps;

export default FamilyMemberSubmit;