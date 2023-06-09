const express = require('express')
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000

const user_model = require('./model.js')

app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    user_model.getUsers()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/users', (req, res) => {
    user_model.createUser(req.body)
        .then(response => {
            res.cookie('refreshToken', req.body.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.status(200).send('New user has been added');
            console.log('Access in index');
            return response;
        })
        .catch(error => {
            res.status(500).send(error);
            console.log('Error in index');
        })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

app.get('/pizza', (req, res) => {
    user_model.getPizza()
        .then(response => {
            res.status(200).send(response);
            console.log('Access in pizza');
        })
        .catch(error => {
            res.status(500).send(error);
            console.log('Error in pizza');
        })
})

app.get('/burger', (req, res) => {
    user_model.getBurger()
        .then(response => {
            res.status(200).send(response);
            console.log('Access in burger');
        })
        .catch(error => {
            res.status(500).send(error);
            console.log('Error in burger');
        })
})

app.get('/beer', (req, res) => {
    user_model.getBeer()
        .then(response => {
            res.status(200).send(response);
            console.log('Access in beer');
        })
        .catch(error => {
            res.status(500).send(error);
            console.log('Error in beer');
        })
})