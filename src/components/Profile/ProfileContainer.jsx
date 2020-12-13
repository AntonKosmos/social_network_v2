import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserStatus, openUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileApiComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId && !this.props.isAuth) {
            this.props.history.push("/login");
        }
        else if(!userId && this.props.isAuth) {
            this.props.openUserProfile(this.props.myId);
            this.props.getUserStatus(this.props.myId);
        }
        else {
            this.props.openUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        myId: state.auth.id,
        status: state.profilePage.status
    };
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {openUserProfile, getUserStatus}),
    withRouter
)(ProfileApiComponent);



