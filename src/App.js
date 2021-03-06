import React, {useRef, useEffect} from 'react';
import {useLocation, Switch} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Profile from './views/Profile';
import ProfileFamilyMember from './views/ProfileFamilyMember.js';
import FamilyMemberSubmit from './components/sections/Psybotic/submitForms/FamilyMemberSubmit';
import ProfileEmergencyContact from './views/ProfileEmergencyContact.js';
import EmergencyContactSubmit from './components/sections/Psybotic/submitForms/EmergencyContactSubmit';
import ProfileData from './views/ProfileData';
import Mainmenu from "./components/sections/Psybotic/Mainmenu";

import ChatPage from "./components/sections/Psybotic/ChatPage";
import SelectPsychologist from "./components/sections/Psybotic/SelectPsychologist";


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
    ReactGA.set({page});
    ReactGA.pageview(page);
};

const App = () => {

    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add('is-loaded')
        childRef.current.init();
        trackPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <Switch>
                    <AppRoute exact path="/" component={Home} layout={LayoutDefault}/>
                    <AppRoute exact path="/mainmenu" component={Mainmenu} layout={LayoutDefault}/>
                    <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault}/>

                    <AppRoute exact path="/table/familyMember" component={ProfileFamilyMember} layout={LayoutDefault}/>
                    <AppRoute exact path="/table/familyMember/submit" component={FamilyMemberSubmit}
                              layout={LayoutDefault}/>

                    <AppRoute exact path="/ChatPage" component={ChatPage} layout={LayoutDefault}/>
                    <AppRoute exact path="/SelectPsychologist" component={SelectPsychologist} layout={LayoutDefault}/>

                    <AppRoute exact path="/table/emergencyContact" component={ProfileEmergencyContact}
                              layout={LayoutDefault}/>
                    <AppRoute exact path="/table/emergencyContact/submit" component={EmergencyContactSubmit}
                              layout={LayoutDefault}/>

                    <AppRoute exact path="/table/profileData/submit" component={ProfileData}
                              layout={LayoutDefault}/>
                </Switch>
            )}/>
    );
}

export default App;
