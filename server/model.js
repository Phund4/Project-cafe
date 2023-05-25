const Pool = require('pg').Pool
require('dotenv').config();
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

const getUsers = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM vhod ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
                console.log('Error in model get')
            }
            resolve(results.rows);
        })
    })
}

const createUser = (body) => {
    return new Promise(function (resolve, reject) {
        const myQuery = `insert into vhod(name, telephone, mail, birthday, password) values ('${body.name}', '${body.telephone}', '${body.email}', '${body.birthday}', '${body.password}')`;
        pool.query(myQuery, (error, results) => {
            if (error) {
                reject(error)
                console.log(myQuery);
                console.log('Error in model create');
            } else {
                console.log('Access query create');
                resolve(`A new user has been added!`)
            }
        })
    })
}


module.exports = {
    getUsers,
    createUser,
}