
const serverUrl = `http://localhost:3001`;

//Get all of the users available for the app. List is found in users.js.
export const fetchUsers = () => {
    let searchUrl = '/users';
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'GET'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        return data;
    });
};


//Add a new user
export const addNewUser = (id, params) => {
    let searchUrl = `/users`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const body = {
        _id: id,
        picture: params.picture,
        isActive: params.isActive,
        name: params.name,
        age: params.age,
        email: params.email,
        longitude: params.longitude,
        latitude: params.latitude
    }

    const data = {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body)
    }

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Get the details of a single user
export const fetchDetailsForSingleUser = (userId) => {
    let searchUrl = `/users/${userId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'GET'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};


//Edit the details of an existing user
export const editUser = (userId, params) => {
    let searchUrl = `/users/${userId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const body = {
        email: params.email,
        phone: params.phone
    }

    const data = {
        headers: headers,
        method: 'PUT',
        body: JSON.stringify(body)
    }

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};


export const deleteUser = (userId) => {
    let searchUrl = `/users/${userId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'DELETE'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};