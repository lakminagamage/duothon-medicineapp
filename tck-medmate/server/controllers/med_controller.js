const mysql = require('mysql2');
const commonFunctions = require('./common_functions');
const pharmacy_api = require('./pharmacy_apis');
const owner_api = require('./owner_apis');
const location_api = require('./location_apis');
const user_api = require('./users_apis');
const med_api = require('./medicine_apis');

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_TOKEN,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

exports.addmed = async (req, res) => {
    console.log(req.body);
    try {
        result = await med_api.addmed(conn,req.body);
        console.log(result);
    } catch (e) {
        console.log('Error : ' + e);
    }
}

exports.updatemed = async (req, res) => {
    console.log(req.body);
    try {
        result = await med_api.updatemed(conn,req.body);
        console.log(result);
    } catch (e) {
        console.log('Error : ' + e);
    }
}

exports.deletemed = async (req, res) => {
    console.log(req.body);
    try {
        result = await med_api.deleteMedicine(conn,req.body);
        console.log(result);
    } catch (e) {
        console.log('Error : ' + e);
    }
}

exports.viewmed = async (req, res) => {
    console.log(req.body);
    try {
        result = await med_api.getMedicineByID(conn,req.body);
        console.log(result);
    } catch (e) {
        console.log('Error : ' + e);
    }
}

function loadAdmin() {
    return new Promise((resolve, reject) => {
        conn.query("SELECT email,password from users where usertype = 1", (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}