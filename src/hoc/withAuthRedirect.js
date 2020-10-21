import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const withAuthRedirect = (Component) => {
    class ContainerComponent extends React.Component {
        render() {
            return this.props.isAuth ? <Component {...this.props}/> : <Redirect to={'/Login'}/>
        }
    }
    return connect(mapStateToProps)(ContainerComponent);
}
