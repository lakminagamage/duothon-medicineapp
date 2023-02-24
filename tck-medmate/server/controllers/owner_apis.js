const mysql = require('mysql2');

// -------------------------- OWNER ------------------------------

exports.getOwners = (conn) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM owner', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getOwnerByID = (conn,id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM owner where id = ' + id, (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

