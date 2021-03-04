import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import {useHistory} from "react-router-dom";


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const ProfileInfo = ({
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

  const sectionHeader = {
    title: userName,
    paragraph: 'Welcome to your profile ' + userName + '. Here, you can check your info saved about you and edit it if you want.',
  };

  const history = useHistory();

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <h4>Personal Info</h4>
                    <b className="text-color-high">Name:</b> {userName}<br/>
                    <b className="text-color-high">Age: </b> <br/>
                    <b className="text-color-high">E-Mail: </b> <br/>
                    <b className="text-color-high">Gender: </b> <br/>
                    <b className="text-color-high">City: </b> <br/>
                    <b className="text-color-high">Martial Status: </b> <br/>
                    <b className="text-color-high">Jobs: </b> <br/>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0" onClick={(() => {history.push("/table/profileData/submit")})}>Edit</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <h4>Family Member Info</h4>
                    You have <b className="text-color-high"> ? </b> family members saved to your profile. Please click the <span className="testimonial-item-link">Edit</span> button to see and edit them
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0" onClick={(() => {history.push("/table/familyMember")})}>Edit</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <h4>Emergency Contact</h4>
                    You have <b className="text-color-high"> ? </b> emergency contacts saved to your profile. Please click the <span className="testimonial-item-link">Edit</span> button to see and edit them
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0" onClick={(() => {history.push("/table/emergencyContact")})}>Edit</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ProfileInfo.propTypes = propTypes;
ProfileInfo.defaultProps = defaultProps;

export default ProfileInfo;