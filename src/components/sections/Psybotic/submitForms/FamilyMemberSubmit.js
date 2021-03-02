import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../../utils/SectionProps';
import DataTable from "../../../elements/DataTable";
import {FAMILY_MEMBER} from "../../../../dataFormats/dataFormats";
import Button from "../../../elements/Button";
import ButtonGroup from "../../../elements/ButtonGroup";
import {useHistory} from 'react-router-dom';

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
    const history = useHistory();
    const row = history.location.state.row;

    const [firstName, setFirstName] = useState(typeof row === "undefined" ? "" : row.firstName);
    const [lastName, setLastName] = useState(typeof row === "undefined" ? "" : row.lastName);
    const [email, setEmail] = useState(typeof row === "undefined" ? "" : row.mail);
    const [phone, setPhone] = useState(typeof row === "undefined" ? "" : row.phone);

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            {(history.location.state.type === "new") ? "Add New Family Members" : "Edit Existing Family Member"}
                        </h1>
                        <form className="reveal-from-bottom" onSubmit={(data) => {
                            alert(firstName + " " + lastName + " " + email + " " + phone);
                        }}>
                            <h3>First Name:</h3>
                            <input
                                type='text'
                                defaultValue={firstName}
                                onChange={(event) => {
                                    setFirstName(event.target.value)
                                }}/>
                            <h3>Last Name:</h3>
                            <input
                                type='text'
                                defaultValue={lastName}
                                onChange={(event) => {
                                    setLastName(event.target.value)
                                }}/>
                            <h3>Phone:</h3>
                            <input
                                type='text'
                                defaultValue={phone}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}/>
                            <h3>Mail:</h3>
                            <input
                                type='text'
                                defaultValue={email}
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }}/>
                            <br/>
                            <br/>
                            <ButtonGroup>
                                <Button type="submit" className="button-secondary">Add</Button>
                                <Button type="button" className="button-dark" onClick={() => {
                                    history.push("/table/familyMember/");
                                }}>Return</Button>
                            </ButtonGroup>
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