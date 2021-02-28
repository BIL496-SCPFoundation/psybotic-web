import React  from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import Image from '../../elements/Image';

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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Welcome to <span className="text-color-primary">Psybotic</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt accumsan nibh et lacinia. Nullam ullamcorper tempor purus quis mattis. Proin pretium libero eget tellus gravida placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="#0">
                    Login with Google
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="#0">
                    Try As Guest
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">

              <Image
                className="has-shadow"
                src={require('../../../assets/images/PsyboticLogo.PNG')}
                alt="Hero"
                width={696}
                height={504} />

          </div>
        </div>
      </div>
    </section>
  );
}

Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

export default Homepage;