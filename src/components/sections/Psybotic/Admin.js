import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import classNames from 'classnames';
import {SectionSplitProps} from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import UserService from "../../../utils/data/axios/services/UserService";
import PsychologistService from "../../../utils/data/axios/services/PsychologistService";

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

// https://www.npmjs.com/package/ag-grid-community

const Admin = ({
                   className,
                   topOuterDivider,
                   bottomOuterDivider,
                   topDivider,
                   bottomDivider,
                   hasBgColor,
                   invertColor,
                   invertMobile,
                   invertDesktop,
                   alignTop,
                   imageFill,
                   ...props
               }) => {

    const outerClasses = classNames(
        'testimonial section',
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'testimonial-inner section-inner',
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: 'Admin Panel',
        paragraph: 'Manage different users and psychologists here'
    };

    const history = useHistory();

    const userService = new UserService();
    const psychologistService = new PsychologistService();

    const [userCount, setUserCount] = useState("?");
    const [psychologistCount, setPsychologistCount] = useState("?")

    userService.findByPagination(1).then((data) => {
        setUserCount(data.data.page.totalElements);
    });

    psychologistService.findByPagination(1).then((data) => {
        setPsychologistCount(data.data.page.totalElements);
    });

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content"/>
                    <div className={splitClasses}>
                        <div className="split-item">
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                 data-reveal-container=".split-item">
                                <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                                    <div className="tiles-item-inner">
                                        <div className="testimonial-item-content">
                                            <p className="text-sm mb-0">
                                                <h4>User Panel</h4>
                                                Currently, <b className="text-color-high"> {userCount} </b> users registered to
                                                the application. Please click the <span
                                                className="testimonial-item-link">Go to Panel</span> button to see and edit
                                                them
                                            </p>
                                        </div>
                                        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0" onClick={(() => {
                        history.push("/Admin/Panel/User");
                    })}>Go to Panel</a>
                  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{"marginRight":"0px"}} className="split-item-content center-content-mobile reveal-from-left"
                                 data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    User Panel
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Manage Users
                                </h3>
                                <p className="m-0">
                                    See and manage individual users
                                </p>
                            </div>
                        </div>

                        <div className="split-item">
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                 data-reveal-container=".split-item">
                                <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                                    <div className="tiles-item-inner">
                                        <div className="testimonial-item-content">
                                            <p className="text-sm mb-0">
                                                <h4>Psychologist Panel</h4>
                                                Currently, <b className="text-color-high"> {psychologistCount} </b> psychologists registered to
                                                the application. Please click the <span
                                                className="testimonial-item-link">Go to Panel</span> button to see and edit
                                                them
                                            </p>
                                        </div>
                                        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0" onClick={(() => {
                        history.push("/Admin/Panel/Psychologist");
                    })}>Go to Panel</a>
                  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="split-item-content center-content-mobile reveal-from-left"
                                 data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Psychologist Panel
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Manage Psychologists
                                </h3>
                                <p className="m-0">
                                    See and manage individual Psychologists registered to the application
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

Admin.propTypes = propTypes;
Admin.defaultProps = defaultProps;

export default Admin;