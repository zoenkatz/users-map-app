import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Control, Form, Field } from 'react-redux-form';
import { isEmail, isEmpty } from 'validator';
import _ from 'lodash'


class AddNewUser extends Component {

    handleSubmit = (event, newUser) => {


        this.setState({
            newUser:{
                _id: newUser._id,
                name: newUser.name,
                age: newUser.age,
                picture: newUser.picture,
                email: newUser.email,
                isActive: newUser.isActive,
                latitude: newUser.latitude,
                longitude: newUser.longitude


            }
        });

        this.props.addNewUser(this.state.newUser);
        event.preventDefault();
        this.props.closeAddUser();
    };

    state = {
        newUser : {
            _id:  Date.now(),
            name: '',
            email: '',
            picture: '',
            age: '',
            latitude: Math.random() * 100,
            longitude: Math.random() * 100
        }
    };


    handleChange = (value, userKey) => {
        debugger;
        switch(userKey) {
            case 'name':
                this.setState({
                    newUser: {
                        _id:  Date.now() + '',
                        name: _.upperFirst(value),
                        email: this.state.newUser.email,
                        picture: this.state.newUser.picture,
                        age: this.state.newUser.age,
                        longitude: this.state.newUser.longitude,
                        latitude: this.state.newUser.latitude
                    }
                });
                break;
            case 'email':
                this.setState({
                    newUser: {
                        _id:  Date.now() + '',
                        name: this.state.newUser.name,
                        email: value,
                        picture: this.state.newUser.picture,
                        age: this.state.newUser.age,
                        longitude: this.state.newUser.longitude,
                        latitude: this.state.newUser.latitude
                    }
                });
                break;

            case 'picture':
                this.setState({
                    newUser: {
                        _id:  Date.now() + '',
                        name: this.state.newUser.name,
                        email: this.state.newUser.email,
                        picture: value,
                        age: this.state.newUser.age,
                        longitude: this.state.newUser.longitude,
                        latitude: this.state.newUser.latitude
                    }
                });
                break;
            case 'age':
                this.setState({
                    newUser: {
                        _id:  Date.now() + '',
                        name: this.state.newUser.name,
                        email: this.state.newUser.email,
                        picture: this.state.newUser.picture,
                        age: value,
                        longitude: this.state.newUser.longitude,
                        latitude: this.state.newUser.latitude
                    }
                });
                break;

        }
    };

    render(){
        const {users} = this.props;
        const {newUser} = this.state;
        //console.log(newUser.name.$form)
        return (
            <div className="create-edit-user">
                <form onSubmit={(e) => this.handleSubmit(e, this.state.newUser)}>
                    <h2>Add a new user</h2>
                    <label>
                        Name: <input value={this.state.newUser.name} placeholder='User name' type='text' onChange={e => this.handleChange(e.target.value, 'name')}/>
                    </label>
                    <label>
                        Age: <input value={this.state.newUser.age} placeholder='User age' type='text' onChange={e => this.handleChange(e.target.value, 'age')}/>
                    </label>
                    <label>
                        Email: <input value={this.state.newUser.email} placeholder='User email' type='text' onChange={e => this.handleChange(e.target.value, 'email')}/>
                    </label>
                    <label>
                        Picture: <input value={this.state.newUser.picture} placeholder='Browse picture' type='file' onChange={e => this.handleChange(e.target.value, 'picture')}/>
                    </label>

                    <button type="submit" value="Add User">Add User</button>
                </form>
            </div>
        )
    };


}

AddNewUser.propTypes = {
    addNewUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

export default AddNewUser;
