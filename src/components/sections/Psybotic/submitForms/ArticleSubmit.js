import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../../../utils/SectionProps';
import Button from "../../../elements/Button";
import ButtonGroup from "../../../elements/ButtonGroup";
import {useHistory} from 'react-router-dom';
import PathNameOperations from "../../../../utils/PathNameOperations";
import FamilyMemberService from "../../../../utils/data/axios/services/FamilyMemberService";
import Input from "../../../elements/Input";
import Select from "../../../elements/Select";
import getUser from "../../../../utils/GetUser";
import ArticleService from "../../../../utils/data/axios/services/ArticleService";

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


    const [articleName, setArticleName] = useState("");
    const [link, setLink] = useState("");
    const [targetAge, setTargetAge] = useState("");
    const OAuthUser = getUser();
    const articleService = new ArticleService()
    console.log(OAuthUser);

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
                            <Input type="text" placeholder="Article Name" defaultValue={articleName}
                                   onChange={(event) => {
                                       setArticleName(event.target.value)
                                   }}
                            />
                            <h3>Link:</h3>
                            <Input type="text" placeholder="Link" defaultValue={link} onChange={(event) => {
                                setLink(event.target.value)
                            }}
                            />
                            <h3>Target Age:</h3>
                            <Select placeholder="Target Audience" onChange={(event) => {
                                setTargetAge(event.target.value)
                            }}>
                                <option value="CHILD">Child</option>
                                <option value="YOUNG_ADULT">Young Adult</option>
                                <option value="ADULT">Adult</option>
                                <option value="OLD">Old</option>
                            </Select>
                            <br/>
                            <br/>
                            <ButtonGroup>
                                <Button type="button" className="button-secondary" onClick={() => {
                                    if(articleName === "" || link === "" || targetAge === "") {
                                        alert("Please fill all the values");
                                    }else {
                                        articleService.insert({
                                            title: articleName,
                                            url: link,
                                            ageRange: targetAge
                                        })
                                    }
                                }}>{"Add"}</Button>
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