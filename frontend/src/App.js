import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions/index.js'
import Modal from 'react-modal';
import * as api from './utils/api';
import './App.css';
import Users from './components/Users'
import {Route, withRouter, Link} from 'react-router-dom'
import _ from 'lodash'
import AddNewUser from './components/AddNewUser'
import Map from './components/Map'


class App extends Component {
    state = {
        users: [],
        addNewUser: false
    };

    onSortUsersList = (list, filter) => {
        if(filter === 'age') {
            this.setState(() => ({users: list.sort((a, b) => a.age - b.age)}));
        }
        else if(filter === 'name'){
            this.setState(() => ({users: list.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                })})
            )
        }
    };

    openAddUser = (user) => this.setState(() => ({addNewUser: true}));
    closeAddUser = () => this.setState(() => ({addNewUser: false}));

    render() {
        const {users, addNewUser, removeUser} = this.state;

        return (

            <div className='container'>
                <h2 className='header'>Users Map App</h2>
                    <div>
                        <Route exact path='/' render={() => (
                            <div className={`users-list-map ${this.state.addNewUser? 'fade' : ''}`}>
                                <div className='users-list'>
                                    <Users users={this.props.users} onSortUsersList={this.onSortUsersList}/>

                                </div>
                                <button id='addNewUser' className='button' onClick={(e) => this.openAddUser()}>+</button>
                                <Modal
                                    className='modal'
                                    overlayClassName='overlay'
                                    ariaHideApp={false}
                                    isOpen={addNewUser}
                                    onRequestClose={this.closeAddUser}
                                    contentLabel='Modal'
                                >
                                    <AddNewUser addNewUser={this.props.addNewUser} users={this.props.users} closeAddUser={this.closeAddUser}/>
                                </Modal>
                                <div className='users-map'>
                                    <Map users={this.props.users} removeUser={this.props.removeUser}/>
                                </div>

                            </div>

                        )}/>
                    </div>

            </div>
        )
    }
}

App.propTypes = {
    users: PropTypes.array.isRequired
}

function mapStateToProps (state, props) {
    return {
        users: state.users,
        user: state.user
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addNewUser: (data) => dispatch(actions.addNewUser(data)),
        removeUser: (data) => dispatch(actions.deleteUser(data))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))

