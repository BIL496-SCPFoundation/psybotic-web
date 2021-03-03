import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../../utils/SectionProps';
import Button from "../../../elements/Button";
import ButtonGroup from "../../../elements/ButtonGroup";
import {useHistory} from 'react-router-dom';
import PathNameOperations from "../../../../utils/PathNameOperations";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ProfileSubmit = ({
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
    const history = useHistory();
    const row = undefined;

    const [firstName, setFirstName] = useState(typeof row === "undefined" ? "" : row.firstName);
    const [lastName, setLastName] = useState(typeof row === "undefined" ? "" : row.lastName);
    const [age, setAge] = useState(typeof row === "undefined" ? "" : row.age);
    const [gender, setGender] = useState(typeof row === "undefined" ? "" : row.gender);
    const [city, setCity] = useState(typeof row === "undefined" ? "" : row.city);
    const [maritialStatus, setMaritialStatus] = useState(typeof row === "undefined" ? "" : row.maritialStatus);
    const [jobs, setjobs] = useState(typeof row === "undefined" ? "" : row.jobs);

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Edit Your Profile Info
                        </h1>
                        <form className="reveal-from-bottom" onSubmit={(data) => {
                            //alert(firstName + " " + lastName + " " + email + " " + phone);
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
                            <h3>Age:</h3>
                            <input
                                type='text'
                                defaultValue={age}
                                onChange={(event) => {
                                    setAge(event.target.value)
                                }}/>
                            <h3>Gender:</h3>
                            <input
                                type='text'
                                defaultValue={gender}
                                onChange={(event) => {
                                    setGender(event.target.value)
                                }}/>
                            <h3>City:</h3>
                            <input
                                type='text'
                                defaultValue={city}
                                onChange={(event) => {
                                    setCity(event.target.value)
                                }}/>
                            <h3>Maritial Status:</h3>
                            <input
                                type='text'
                                defaultValue={maritialStatus}
                                onChange={(event) => {
                                    setMaritialStatus(event.target.value)
                                }}/>
                            <h3>Jobs:</h3>
                            <input
                                type='text'
                                defaultValue={jobs}
                                onChange={(event) => {
                                    setjobs(event.target.value)
                                }}/>
                            <br/>
                            <br/>
                            <ButtonGroup>
                                <Button type="submit" className="button-secondary">Edit</Button>
                            </ButtonGroup>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

ProfileSubmit.propTypes = propTypes;
ProfileSubmit.defaultProps = defaultProps;

export default ProfileSubmit;