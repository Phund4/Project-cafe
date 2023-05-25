const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000

const user_model = require('./model.js')

app.use(cors());
app.use(express.json())

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
            res.status(200).send(response);
            console.log('Access in index');
        })
        .catch(error => {
            res.status(500).send(error);
            console.log('Error in index');
        })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})