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

app.post('/login', (req, res, next) => {
    user_model.LoginUser(req.body)
        .then(response => {
            
        })
})

app.post('/logout', (req, res, next) => {

})

app.get('/refresh', (req, res, next) => {

})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})