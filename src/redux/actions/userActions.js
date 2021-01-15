import { FETCH_USERS, NEW_USER, EDIT_USER, FETCH_SINGLE_USERS, DELETE_USER } from "./types";

export const fetchUsers = () => dispatch => {
    fetch('https://raphaeltodo.herokuapp.com/api/v1/users')
    .then(res => res.json())
    .then(users => dispatch({
        type: FETCH_USERS,
        payload: users
    }));
}

export const fetchSingleUser = (userId) => dispatch => {
    fetch(`https://raphaeltodo.herokuapp.com/api/v1//users/${userId}`)
    .then(res => res.json())
    .then(user => dispatch({
        type: FETCH_SINGLE_USERS,
        payload: user
    }));
}

export const createUser = (history, userData) => dispatch => {
    fetch('https://raphaeltodo.herokuapp.com/api/v1//users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(user => {
            dispatch({
            type: NEW_USER,
            payload: user
        })

        history.push('/')
    });
}

export const editUser = (history, userData) => dispatch => {
    fetch(`https://raphaeltodo.herokuapp.com/api/v1//users/${userData.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(user =>{
            dispatch({
            type: EDIT_USER,
            payload: user
        })
        history.push('/')
    });
}

export const deleteUser = (history, user) => dispatch => {
    fetch(`https://raphaeltodo.herokuapp.com/api/v1//users/${user.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(id => {
            dispatch({
            type: DELETE_USER,
            payload: {id:user.id}
        })

        history.push('/')
    });
}