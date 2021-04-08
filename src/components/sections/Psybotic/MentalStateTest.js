import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import {useHistory} from "react-router-dom";
import UserService from "../../../utils/data/axios/services/UserService";
import getUser from '../../../utils/GetUser'
import {Test, QuestionGroup, Question, Option} from 'react-multiple-choice';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from "../../elements/ButtonGroup";
import Button from "../../elements/Button";
import PathNameOperations from "../../../utils/PathNameOperations";

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const MentalStateTest = ({
                             className,
                             userName,
                             topOuterDivider,
                             bottomOuterDivider,
                             topDivider,
                             bottomDivider,
                             hasBgColor,
                             invertColor,
                             pushLeft,
                             ...props
                         }) => {

    const outerClasses = classNames(
        'testimonial section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'testimonial-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );


    const history = useHistory();

    const [user, setUser] = useState({});
    const [selectedOptions, setSelectedOptions] = useState({});

    const OAuthUser = getUser();

    const sectionHeader = {
        title: OAuthUser.firstName,
        paragraph: 'Welcome to the mental state test ' + OAuthUser.firstName + '. Here, you can  take a short quiz about your mental state.',
    };

    const userService = new UserService();

    if (Object.keys(OAuthUser).length !== 0 && Object.keys(user).length === 0) {
        userService.findById(OAuthUser.googleId).then((response) => {
            if (JSON.stringify(response.data) !== JSON.stringify(user))
                setUser(response.data);
        })
    }

    const questions = [
        "Little interest or pleasure in doing things",
        "Feeling down, depressed, or hopeless",
        "Trouble falling or staying asleep, or sleeping too much",
        "Feeling tired or having little energy",
        "Poor appetite or overeating",
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        "Trouble concentrating on things, such as reading the newspaper or watching television",
        "Moving or speaking so slowly that other people could have noticed",
        "Thoughts that you would be better off dead, or of hurting yourself",
    ]

    const getOptions = (question, index) => {
        return (
            <QuestionGroup questionNumber={index} key={index}>

                <Question>
                    <div className="text-color-high mt-5">{question}</div>
                </Question>
                <Option value="0">Not at all</Option>
                <Option value="1">Several days</Option>
                <Option value="2">More than half of the days</Option>
                <Option value="3">Nearly every day</Option>
            </QuestionGroup>
        )
    }

    // https://www.psycom.net/depression-test/
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content"/>

                    <div className={tilesClasses}>

                        <ButtonGroup className="footer-bottom">
                            <Button type="button" className="button-dark" onClick={() => {
                                history.push("/Mainmenu");
                            }}>Return</Button>
                        </ButtonGroup>
                    </div>
                    <div className={tilesClasses}>
                        <Test onOptionSelect={selectedOptions =>
                            setSelectedOptions({...selectedOptions})
                        }>
                            {questions.map((value, index) => {
                                return getOptions(value, index);
                            })}
                        </Test>
                    </div>
                    <div className={tilesClasses}>

                    <ButtonGroup className="footer-bottom">
                        <Button type="button" className="button-secondary" onClick={() => {
                        }}>Submit</Button>
                        <Button type="button" className="button-dark" onClick={() => {
                            history.push("/Mainmenu");
                        }}>Return</Button>
                    </ButtonGroup>
                    </div>
                </div>
            </div>
        </section>
    );
}

MentalStateTest.propTypes = propTypes;
MentalStateTest.defaultProps = defaultProps;

export default MentalStateTest;