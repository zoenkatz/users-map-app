import * as api from '../utils/api'
import * as actionTypes from './actionTypes.js'

export function loadUsersSuccess(data){
    return {type: actionTypes.LOAD_USERS_SUCCESS, data};
}

export function loadUsers(){
    return function(dispatch) {
        return api.fetchUsers().then(data => {
            if(!data){
                data = null;
            }
            dispatch(loadUsersSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function addNewUserSuccess(data){
    return {type: actionTypes.NEW_USER_SUCCESS, data};
}

export function addNewUser(params){
    return function(dispatch) {
        return api.addNewUser(params._id, params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(addNewUserSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function editUserSuccess(data){
    return {type: actionTypes.EDIT_USER_SUCCESS, data};
}

export function editUser(params){
    return function(dispatch) {
        return api.editUser(params._id, params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(editUserSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}


export function deleteUserSuccess(data){
    return {type: actionTypes.DELETE_USER_SUCCESS, data};
}

export function deleteUser(params){
    return function(dispatch) {
        return api.deleteUser(params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(deleteUserSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

