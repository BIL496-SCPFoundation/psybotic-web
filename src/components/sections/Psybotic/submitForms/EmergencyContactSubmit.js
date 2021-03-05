import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../../utils/SectionProps';
import Button from "../../../elements/Button";
import ButtonGroup from "../../../elements/ButtonGroup";
import {useHistory} from 'react-router-dom';
import PathNameOperations from "../../../../utils/PathNameOperations";
import EmergencyContactService from "../../../../utils/data/axios/services/EmergencyContactService";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const EmergencyContactSubmit = ({
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
    const row = history.location.state.row;
    const comp_type = history.location.state.type;

    const [name, setName] = useState(typeof row === "undefined" ? "" : row.name);
    const [type, setType] = useState(typeof row === "undefined" ? "" : row.type);
    const [email, setEmail] = useState(typeof row === "undefined" ? "" : row.email);
    const [phone, setPhone] = useState(typeof row === "undefined" ? "" : row.phone);

    const emergencyContactService = new EmergencyContactService();
    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            {(comp_type === "new") ? "Add New Emergency Contact" : "Edit Existing Emergency Contact"}
                        </h1>
                        <form className="reveal-from-bottom">
                            <h3>Name:</h3>
                            <input
                                type='text'
                                defaultValue={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}/>
                            <h3>Type:</h3>
                            <input
                                type='text'
                                defaultValue={type}
                                onChange={(event) => {
                                    setType(event.target.value)
                                }}/>
                            <h3>Phone:</h3>
                            <input
                                type='text'
                                defaultValue={phone}
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }}/>
                            <h3>Mail:</h3>
                            <input
                                type='text'
                                defaultValue={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}/>
                            <br/>
                            <br/>
                            <ButtonGroup>
                                <Button type="button" className="button-secondary" onClick={() => {
                                    if (comp_type === "new")
                                        emergencyContactService.insert({superId: "1", name, type, email, phone})
                                            .then(() => {
                                                alert("Emergency Contact Submitted!");
                                                history.push(PathNameOperations.parentPathName(location.pathname));
                                            });
                                    else
                                        emergencyContactService.update({
                                            id: row.id,
                                            superId: "1",
                                            name,
                                            type,
                                            email,
                                            phone
                                        })
                                            .then(() => alert("Emergency Contact Updated!"));

                                }}>{(comp_type === "new") ? "Add" : "Edit"}</Button>
                                <Button type="button" className="button-dark" onClick={() => {
                                    history.push(PathNameOperations.parentPathName(location.pathname));
                                }}>Return</Button>
                            </ButtonGroup>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

EmergencyContactSubmit.propTypes = propTypes;
EmergencyContactSubmit.defaultProps = defaultProps;

export default EmergencyContactSubmit;