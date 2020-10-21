import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/news" render={News}/>
                <Route path="/settings" render={Settings}/>
                <Route path="/music" render={Music}/>
                <Route path="/users" render={()=> <UsersContainer/>}/>
                <Route path={'/Login'}  render={()=> <Login/>}/>
            </div>
        </div>
    );
}

export default App;
