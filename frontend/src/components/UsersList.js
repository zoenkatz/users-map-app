import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactListing from 'react-listing'
import ReactList from 'react-list';
import _ from 'lodash'
import {Link} from 'react-router-dom'
import styles from '../App.css';


const UsersList = ({users}) => {

    return (
        <div className='users-list-items'>
            <ol>
                {users && users.map((user, index) => (
                    <li key={index}>
                        <label>Name: </label>{user.name}
                        <ul>
                            <li><label>Age: </label> {user.age}</li>
                            <li><label>Email: </label> {user.email}</li>
                            <li><label>Is active: </label> {user.isActive.toString()}</li>
                            <li><label>Latitude: </label> {user.latitude}</li>
                            <li><label>Longitude: </label> {user.longitude}</li>
                            <li><label>Picture: </label> <img src={user.picture}/></li>
                        </ul>
                    </li>
                ))}
            </ol>
        </div>
    )

}

UsersList.propTypes = {
    users: PropTypes.array.isRequired

};
export default UsersList;