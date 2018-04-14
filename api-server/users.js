const clone = require('clone')

let db = {}

const fs = require('fs');
let defaultData;
fs.readFile('./usersData.JSON', 'utf8', function (err, data) {
    if (err) throw err;
    defaultData = JSON.parse(data);
});

function getData (token) {
    let data = db[token]
    if (data == null) {
        data = db[token] = clone(defaultData)
    }
    return data
}

function get (token, id) {
    return new Promise((res) => {
        const users = getData(token)
        res(
            users[id].deleted
                ? {}
                : users[id]
        )
    })
}

function getAll (token) {
    return new Promise((res) => {
        const users = getData(token)
        let keys = Object.keys(users)
        let filtered_keys = keys.filter(key => !users[key].deleted)
        res(filtered_keys.map(key => users[key]))
    })
}

function add (token, user) {
    return new Promise((res) => {
        let users = getData(token)

        users[user._id] = {
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            age: user.age,
            longitude: user.longitude,
            latitude: user.latitude,
            isActive: true
        }

        res(users[user._id])
    })
}


function deleteUser (token, id) {
    return new Promise((res) => {
        let users = getData(token);
        console.log(users);
        for(const user of users) {
            if(user._id === id){
                res(user);
            }
        }
    })
}

function edit (token, id, user) {
    return new Promise((res) => {
        let users = getData(token)
        for (prop in user) {
            users[id][prop] = user[prop]
        }
        res(users[id])
    })
}


module.exports = {
    get,
    getAll,
    add,
    edit,
    deleteUser
}
