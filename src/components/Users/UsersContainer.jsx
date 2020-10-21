import React from 'react';
import {connect} from "react-redux";
import usersReducer, {
    follow,
    unfollow,
    getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageSelect = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   maxPage={this.props.maxPage}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageSelect={this.onPageSelect}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }

}

let mapStateToUsers = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        maxPage: state.usersPage.maxPage,
        currentPage: state.usersPage.currentPage,
        followingProgress: state.usersPage.followingProgress,
        isFetching: state.usersPage.isFetching

    }
};

export default compose(
    connect(mapStateToUsers, {
        follow,
        unfollow,
        getUsers
    })
)(UsersContainer);
