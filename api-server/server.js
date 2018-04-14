require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const users = require('./users');

const app = express();

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
    const help = `
  <pre>
    Welcome to the users-map  API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /users
      USAGE:
        Get all of the users available for the app. List is found in users.js.

    POST /users
      USAGE:
        Add a new user

      PARAMS:
        id - UUID should be fine,
        timestamp - timestamp in whatever format you like, you can use Date.now() if you like
        title - String
        body - String
        author - String
        category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

    GET /users/:id
      USAGE:
        Get the details of a single user

    PUT /users/:id
      USAGE:
        Edit the details of an existing user
      PARAMS:
        title - String
        body - String

    DELETE /users/:id
      USAGE:
        delete single user

   
 </pre>
  `
    res.send(help)
})

app.use((req, res, next) => {
    const token = req.get('Authorization')
    if (token) {

        req.token = token;

        next()
    } else {
        res.status(403).send({
            error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
        })
    }
})


app.get('/users', (req, res) => {
    users.getAll(req.token)
        .then(
            (data) => res.send(data),
            (error) => {
                console.error(error)
                res.status(500).send({
                    error: 'There was an error.'
                })
            }
        )
});


app.post('/users', bodyParser.json(), (req, res) => {
    console.log(req);
    users.add(req.token, req.body)
        .then(
            (data) => res.send(data),
            (error) => {
                console.error(error)
                res.status(500).send({
                    error: 'There was an error.'
                })
            }
        )
});

app.get('/users/:id', (req, res) => {
    users.get(req.token, req.params._id)
        .then(
            (data) => res.send(data),
            (error) => {
                console.error(error),
                res.status(500).send({
                    error: 'There was an error.'
                })
            }
        )
});

app.delete('/users/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.params)
    users.deleteUser(req.token, req.params.id)
        .then(
            (data) => res.send(data),
            (error) => {
                console.error(error),
                    res.status(500).send({
                        error: 'There was an error.'
                    })
            }
        )
});

app.put('/users/:id', bodyParser.json(), (req, res) => {
    users.edit(req.token, req.params._id, req.body)
        .then(
            (data) => res.send(data),
            (error) => {
                console.error(error)
                res.status(500).send({
                    error: 'There was an error.'
                })
            }
        )
});


app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
});
