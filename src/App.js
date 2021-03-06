import React, {useRef, useEffect} from 'react';
import {useLocation, Switch} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Profile from './views/Profile';
import ProfileFamilyMember from './views/ProfileFamilyMember.js';
import FamilyMemberSubmit from './components/sections/Psybotic/submitForms/FamilyMemberSubmit';
import ProfileEmergencyContact from './views/ProfileEmergencyContact.js';
import PatientChatView from './views/PatientChatView.js';
import EmergencyContactSubmit from './components/sections/Psybotic/submitForms/EmergencyContactSubmit';
import ProfileData from './views/ProfileData';
import ArticleSubmitView from "./views/ArticleSubmitView";
import AdminPage from './views/AdminPage.js';
import ChatListView from './views/ChatListView.js';

import UserPanelPage from './views/UserPanelPage.js';
import PsychologistPanelPage from "./views/PsychologistPanelPage";
import ManagePsychologists from "./components/sections/Psybotic/ManagePsychologists";
import QuizDisplay from "./views/QuizDisplay";

import MainMenu from "./views/MainMenuDisplay";
import ChatPageDisplay from "./views/ChatPageDisplay";
import SelectPsychologist from "./components/sections/Psybotic/SelectPsychologist";
import PsychologistProfile from "./components/sections/Psybotic/PsychologistProfile";
import ApplyPsy from "./components/sections/Psybotic/ApplyPsy.js";
import PsychologistChat from "./components/sections/Psybotic/PsychologistChat"
import LearnMore from "./components/sections/Psybotic/LearnMore.js";
import ArticleChild from './components/elements/ArticleChild';
import ArticleYoungAdult from './components/elements/ArticleYoungAdult';
import ArticleAdult from './components/elements/ArticleAdult';
import ArticleOld from './components/elements/ArticleOld';


const App = () => {

    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        document.body.classList.add('is-loaded')
        childRef.current.init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <Switch>
                    <AppRoute exact path="/" component={Home} layout={LayoutDefault}/>
                    <AppRoute exact path="/mainmenu" component={MainMenu} layout={LayoutDefault}/>
                    <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault}/>

                    <AppRoute exact path="/table/familyMember" component={ProfileFamilyMember} layout={LayoutDefault}/>
                    <AppRoute exact path="/table/familyMember/submit" component={FamilyMemberSubmit}
                              layout={LayoutDefault}/>

                    <AppRoute exact path="/ChatPage" component={ChatPageDisplay} layout={LayoutDefault}/>
                    <AppRoute exact path="/SelectPsychologist" component={SelectPsychologist} layout={LayoutDefault}/>
                    <AppRoute exact path="/PsychologistProfile/:id" component={PsychologistProfile} layout={LayoutDefault}/>
                    <AppRoute exact path="/Chat/Psychologist/:id" component={PsychologistChat} layout={LayoutDefault}/>
                    <AppRoute exact path="/Chat/Patient/:id" component={PatientChatView} layout={LayoutDefault}/>

                    <AppRoute exact path="/Chat/ChatList" component={ChatListView} layout={LayoutDefault}/>

                    <AppRoute exact path="/ApplyPsy" component={ApplyPsy} layout={LayoutDefault}/>
                    <AppRoute exact path="/LearnMore" component={LearnMore} layout={LayoutDefault}/>
                    <AppRoute exact path="/Article/YoungAdult" component={ArticleYoungAdult} layout={LayoutDefault}/>
                    <AppRoute exact path="/Article/Adult" component={ArticleAdult} layout={LayoutDefault}/>
                    <AppRoute exact path="/Article/Child" component={ArticleChild} layout={LayoutDefault}/>
                    <AppRoute exact path="/Article/Old" component={ArticleOld} layout={LayoutDefault}/>

                    <AppRoute exact path="/table/emergencyContact" component={ProfileEmergencyContact}
                              layout={LayoutDefault}/>
                    <AppRoute exact path="/table/emergencyContact/submit" component={EmergencyContactSubmit}
                              layout={LayoutDefault}/>

                    <AppRoute exact path="/table/profileData/submit" component={ProfileData}
                              layout={LayoutDefault}/>

                    <AppRoute exact path="/Admin" component={AdminPage}
                              layout={LayoutDefault}/>
                    <AppRoute exact path="/Admin/Panel/User" component={UserPanelPage} layout={LayoutDefault}/>
                    <AppRoute exact path="/Admin/Panel/Psychologist" component={PsychologistPanelPage}
                              layout={LayoutDefault}/>

                    <AppRoute exact path="/Admin/Article/Submit" component={ArticleSubmitView}
                              layout={LayoutDefault}/>

                    <AppRoute exact path="/admin/panel/verify" component={ManagePsychologists}
                              layout={LayoutDefault}/>

                    <AppRoute exact path="/mentalState/test" component={QuizDisplay}
                              layout={LayoutDefault}/>

                </Switch>
            )}/>
    );
}

export default App;
