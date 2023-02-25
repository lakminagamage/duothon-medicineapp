const mysql = require('mysql2');
// -------------------------- Categories -------------------------

exports.getCategory = (conn) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM med_category', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
            //test
        });
    });
}

exports.getCategoryByID = (conn,id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM med_category where id = ' + id, (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getCategoryByName = (conn,name) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM med_category where name = ' + name, (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}