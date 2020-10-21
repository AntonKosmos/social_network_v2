import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

let mapDispatchToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching
    };
};

export default compose (
    connect(mapDispatchToProps, {getUserData})
)(HeaderContainer);
