import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link, useHistory} from 'react-router-dom';
import Logo from './partials/Logo';
import {Dropdown, Button, SplitButton, DropdownButton, ButtonGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/userButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faSignOutAlt, faUser, faUserEdit, faUsers} from '@fortawesome/free-solid-svg-icons'
import UserService from "../../utils/data/axios/services/UserService";




const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}



const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const history = useHistory();

  const showLogo = function(){
    if(history.location.pathname === "/" || history.location.pathname === "/home")return false;
    return true;
  }

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });
  const [user, setUser] = useState({name: "", age: "", email: "", gender: "", city: "", maritalStatus: ""});
  const [familyMemberCount, setFamilyMemberCount] = useState("?");
  const [emergencyContactCount, setEmergencyContactCount] = useState("?");
  var userService = new UserService();

  userService.findById("1").then((response) => {
    if (JSON.stringify(response.data) !== JSON.stringify(user))
      setUser(response.data);
  })

  userService.getData("1", "/familyMembers").then((response) => {
    setFamilyMemberCount(response.data.length);
  })
  userService.getData("1", "/emergencyContacts").then((response) => {
    setEmergencyContactCount(response.data.length);
  })

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"/>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="#0" onClick={closeMenu}>Documentation</Link>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to={{ pathname: "https://github.com/BIL496-SCPFoundation" }} target="_blank" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Github</Link>
                      </li>
                    </ul>}
                  {showLogo() &&
                  <ul
                      className="list-reset header-nav-right ml-3"
                  >
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle size="sm" variant="success" id="dropdown-basic">
                          <FontAwesomeIcon icon={faUser} /> {user.firstName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={(() => {
                            history.push("/Profile", {user})
                          })} ><FontAwesomeIcon icon={faUser} />Profile</Dropdown.Item>
                          <Dropdown.Item onClick={(() => {
                            history.push("/table/profileData/submit", {user})
                          })} ><FontAwesomeIcon icon={faUserEdit} />Edit Personal Info</Dropdown.Item>
                          <Dropdown.Item onClick={(() => {
                            history.push("/table/familyMember", {user})
                          })} ><FontAwesomeIcon icon={faUsers} /> Edit Family Info</Dropdown.Item>
                          <Dropdown.Item onClick={(() => {
                            history.push("/table/emergencyContact", {user})
                          })} ><FontAwesomeIcon icon={faPhone} />Edit Emergency Info</Dropdown.Item>
                          <Dropdown.Item onClick={(() => {
                            history.push("/Home", {user})
                          })} ><FontAwesomeIcon icon={faSignOutAlt} />Log Out</Dropdown.Item>
                        </Dropdown.Menu>

                      </Dropdown>
                    </li>
                  </ul>}

                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}


Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
