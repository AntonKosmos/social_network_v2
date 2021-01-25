import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserStatus, openUserProfile, savePhoto, updateProfileInfo, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileApiComponent extends React.Component {

    refreshProfileInfo () {
        let userId = this.props.match.params.userId;
        if(!userId && !this.props.isAuth) {
            this.props.history.push("/login");
        }
        else if(!userId && this.props.isAuth) {
            this.props.openUserProfile(this.props.myId);
            this.props.getUserStatus(this.props.myId);
        }
        else {
            if(userId) {
                this.props.openUserProfile(userId);
                this.props.getUserStatus(userId);
            }
        }
    }

    componentDidMount() {
        this.refreshProfileInfo()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if(this.props.match.params.userId != prevProps.match.params.userId) {
           this.refreshProfileInfo()
       }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        myId: state.auth.id,
        status: state.profilePage.status,
        statusLoadData: state.profilePage.statusLoadData
    };
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {openUserProfile, getUserStatus, savePhoto, updateStatus, updateProfileInfo}),
    withRouter
)(ProfileApiComponent);



