import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../../utils/SectionProps';
import Button from "../../../elements/Button";
import ButtonGroup from "../../../elements/ButtonGroup";
import {useHistory} from 'react-router-dom';
import PathNameOperations from "../../../../utils/PathNameOperations";
import FamilyMemberService from "../../../../utils/data/axios/services/FamilyMemberService";
import Input from "../../../elements/Input";
const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ArticleSubmit = ({
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

    const [articleName, setArticleName] = useState(typeof row === "undefined" ? "" : row.articleName);
    const [link, setLink] = useState(typeof row === "undefined" ? "" : row.link);
    const [targetAge, setTargetAge] = useState(typeof row === "undefined" ? "" : row.targetAge);

    const familyMemberService = new FamilyMemberService();

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            {"Submit New Articles"}
                        </h1>
                        <form className="reveal-from-bottom"
                              style={{textAlign: "left", paddingLeft: "225px", paddingRight: "225px"}}>
                            <h3>Article Name:</h3>
                            <Input type="text" placeholder="Article Name" defaultValue={articleName} onChange={(event) => {
                                setArticleName(event.target.value)
                            }}
                            />
                            <h3>Link:</h3>
                            <Input type="text" placeholder="Link" defaultValue={link} onChange={(event) => {
                                setLink(event.target.value)
                            }}
                            />
                            <h3>Target Age:</h3>
                            <Input type="number" placeholder="Target Age" defaultValue={targetAge} onChange={(event) => {
                                setTargetAge(event.target.value)
                            }}
                            />
                            <br/>
                            <br/>
                            <ButtonGroup>
                                <Button type="button" className="button-secondary" onClick={() => {
                                        familyMemberService.insert({articleName, link, targetAge})
                                            .then(() => {
                                                alert("Family Member Submitted!");
                                                history.push(PathNameOperations.parentPathName(location.pathname));
                                            });

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

ArticleSubmit.propTypes = propTypes;
ArticleSubmit.defaultProps = defaultProps;

export default ArticleSubmit;