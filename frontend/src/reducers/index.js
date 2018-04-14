import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes.js'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'


const initialUserState = {
    id: null,

};

function users(state = [], action){
    debugger;
    switch (action.type) {
        case actionTypes.LOAD_USERS_SUCCESS:
            return action.data;
        case actionTypes.DELETE_USER_SUCCESS:
            return _.reject(state, {'_id': action.data._id});
        case actionTypes.NEW_USER_SUCCESS:
            return state.concat(action.data);

        default :
            return state
    }
}


const addNewUser = formReducer('addNewUser', initialUserState);


export default combineReducers({
    users
})