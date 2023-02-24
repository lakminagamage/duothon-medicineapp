const mysql = require('mysql2');
const commonFunctions = require('./common_functions');
const pharmacy_api = require('./pharmacy_apis');
const owner_api = require('./owner_apis');
const location_api = require('./location_apis');
const user_api = require('./users_apis');

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_TOKEN,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

exports.addph = async (req, res) => {
    console.log(req.body);
    try {
        result = await pharmacy_api.addPharmacy(conn,req.body);
        console.log(result);
    } catch (e) {
        console.log('Error : ' + e);
    }
}

exports.updateph = async (req, res) => {
    console.log(req.body);
    try {
        result = await pharmacy_api.updatePharmacy(conn,req.body);
        console.log(result);
    } catch (e) {
        console.log('Error : ' + e);
    }
}

exports.deleteph = async (req, res) => {
    console.log(req.body);
    try {
        result = await pharmacy_api.deletePharmacy(conn,req.body);
        console.log(result);
    } catch (e) {
        console.log('Error : ' + e);
    }
}

exports.viewph = async (req, res) => {
    console.log(req.params.id);
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