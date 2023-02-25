const mysql = require('mysql2');
// -------------------------- Locations -------------------------

exports.getUser = (conn) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT id,email,uid,usertype FROM users', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getUserByEmail = (conn,email) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT id,uid,usertype FROM users where email = "' + email + '"', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getUserByUID = (conn,uid) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT id,email,usertype FROM users where uid = "' + uid + '"', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}