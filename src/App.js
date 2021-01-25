import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/MusicContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./common/preloader/preloader";
import {appInitialization} from "./redux/app-reducer";
import {withSuspense} from "./hoc/withSuspense";

// import UsersContainer from "./components/Users/UsersContainer";
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

let mapStateToProps = (state) => {
    return {
        appInitialize: state.app.initialization
    };
};

class App extends React.Component {

    componentDidMount() {
        this.props.appInitialization();
    }

    render() {
        if(!this.props.appInitialize) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={News}/>
                    <Route path="/settings" render={Settings}/>
                    <Route path="/music" render={() => <MusicContainer/>}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path={'/Login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {appInitialization})
)(App);
