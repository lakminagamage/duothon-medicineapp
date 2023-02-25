const mysql = require('mysql2');
// -------------------------- Locations -------------------------

exports.getLocations = (conn,id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM locations', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getLocationByCity = (conn,city) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT id,district FROM locations where city = "' + city + '"', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getLocationByDistrict = (conn,district) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT id,city FROM locations where district = "' + district + '"', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}
