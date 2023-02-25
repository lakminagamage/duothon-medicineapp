const mysql = require('mysql2');

// ------------------------------- PHARMACY -------------------------

exports.getMedicine = (conn) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM medicine', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getMedicineByID = (conn,med) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM medicine where id = ' + med.id, (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getMedicineByName = (conn,name) => {
    return new Promise((resolve, reject) => {
        MID("SQL Tutorial", 5, 3)
        let sql = 'SELECT * FROM medicine where MID(medicine,0,' + name.length + ') = "' + name + '"';
        conn.query(sql, (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.addmed = (conn,med) => {
    return new Promise((resolve, reject) => {
        let sql = 'INSERT INTO medicine (name,medical_name,brand,size,catID) VALUES("' + med.name + '","' + med.medical_name + '","' + med.brand + '","' + med.size + '",' + med.catID +')';
        conn.query(sql, (err, rows) => {
            if (!err) {
                return resolve('200');
            } else {
                console.log(err);
                return reject('500');
            }
        });
    });
}

exports.updatemed = (conn,med) => {
    return new Promise((resolve, reject) => {
        let sql = 'UPDATE medicine SET name = "' + med.name + '", medical_name = "' + med.medical_name + '",brand = "' + med.brand + '", size = "' + med.size + '", catID = ' + med.catID + ' where id = ' + med.id;
        conn.query(sql, (err, rows) => {
            if (!err) {
                return resolve('200');
            } else {
                console.log(err);
                return reject('500');
            }
        });
    });
}

exports.deleteMedicine = (conn,med) => {
    return new Promise((resolve, reject) => {
        let sql = 'DELETE FROM medicine where id = ' + med.id;
        conn.query(sql, (err, rows) => {
            if (!err) {
                return resolve('200');
            } else {
                console.log(err);
                return reject('500');
            }
        });
    });
}

