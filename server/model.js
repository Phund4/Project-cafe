const CryptoJS = require('crypto-js');
const tokenService = require('./token-service')
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
            results.rows = results.rows.map(el => {
                el.password = CryptoJS.AES.decrypt(el.password, process.env.SECRET_PASS).toString(CryptoJS.enc.Utf8);
                return el;
            })
            resolve(results.rows);
        })
    })
}

const LoginUser = (body) => {
    return new Promise(function(resolve, reject) {
        const tokenInfo = {
            name: body.name,
            email: body.email,
            telephone: body.telephone
        }
        const tokens = tokenService.generateTokens(tokenInfo);
        const myQuery = `update vhod set refresh_token = '${tokens.refreshToken}' where mail = '${tokenInfo.email}'`;
        pool.query(myQuery, (error, results) => {
            if (error) {
                reject(error)
                console.log(myQuery);
                console.log('Error in model login');
            } else {
                console.log('Access query create');
                resolve({tokens, body})
            }
        })
    })
}

const createUser = (body) => {
    return new Promise(function (resolve, reject) {
        const tokenInfo = {
            name: body.name,
            email: body.email,
            telephone: body.telephone
        }
        const tokens = tokenService.generateTokens(tokenInfo);
        body.refreshToken = tokens.refreshToken;
        const myQuery = `insert into vhod(name, telephone, mail, birthday, password, refresh_token) values ('${body.name}', '${body.telephone}', '${body.email}', '${body.birthday}', '${CryptoJS.AES.encrypt(body.password, process.env.SECRET_PASS).toString()}', '${body.refreshToken}')`;
        pool.query(myQuery, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve({tokens, body})
            }
        })
    })
}


module.exports = {
    getUsers,
    createUser,
    LoginUser
}