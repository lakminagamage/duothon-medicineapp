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

exports.view = async (req, res) => {
    console.log('Starting controller...');

    let pharmacies,locations,owners;

    try {
        pharmacies = await pharmacy_api.getPharmacies(conn);
        console.log(pharmacies);
    } catch (e) {
        console.log('Error : ' + e);
    }

    try {
        locations = await location_api.getLocations(conn);
        console.log(locations);
    } catch (e) {
        console.log('Error : ' + e);
    }

    res.render('admin_pharmacy_view', {pharmacies : pharmacies, locations: locations});
}

exports.viewph = async (req, res) => {
    let pharmacy,location,owner;
    console.log('searching...' + req.body.id);
    try {
        pharmacy = await pharmacy_api.getPharmacyByID(conn,req.body.id);
        console.log(pharmacy);
    } catch (e) {
        console.log('Error : ' + e);
    }

    return({response: '200'});
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