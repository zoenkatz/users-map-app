import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsersList from './UsersList'
import ReactList from 'react-list';
import _ from 'lodash'
import {Link} from 'react-router-dom'
import styles from '../App.css';


const Users = ({users, onSortUsersList}) => {

    return (
        <div className='users-list'>
            <h3 className='users-header'>
                Users
            </h3>
            <div className="users-sort">
                <label className='sort-label'>Sort by: </label>
                <select value={users.value} onChange={(event) => onSortUsersList(users, event.target.value)}>
                    <option value="name">Name</option>
                    <option value="age">Age</option>
                </select>
            </div>
            <UsersList users={users}></UsersList>
        </div>
    )

}

Users.propTypes = {
    users: PropTypes.array.isRequired

};
export default Users;