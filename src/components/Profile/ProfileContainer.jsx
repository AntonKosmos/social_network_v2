import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {openUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileApiComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.openUserProfile(userId);
    }

    render() {
        return <Profile {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    };
}

export default compose(
    connect(mapStateToProps, {openUserProfile}),
    withAuthRedirect,
    withRouter
)(ProfileApiComponent);



