const mysql = require('mysql2');

// ------------------------------- PHARMACY -------------------------

exports.getPharmacies = (conn) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM pharmacy', (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getPharmacyByID = (conn,id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM pharmacy where id = ' + id, (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getPharmacyByOwner = (conn,id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM pharmacy where ownerID = ' + id, (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}

exports.getPharmacyByLocation = (conn,locations) => {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM pharmacy where location in (';
        locations.forEach(element => {
            sql = sql + element + ',';
        });
        sql = sql.substring(0,sql.length-1);
        sql = sql + ')';
        conn.query(sql, (err, rows) => {
            if (!err) {
                return resolve(rows);
            } else {
                return reject(err);
            }
        });
    });
}


// ----------------------------- ADD Pharmacy -------------------------
exports.addPharmacy = (conn,ph) => {
    return new Promise((resolve, reject) => {
        let sql = 'INSERT INTO pharmacy (name,addressNo,addressStreet,location,postalCode,telephoneNo,ownerID,brNo,discount,isapproved) VALUES("' + ph.name + '","' + ph.addressNo + '","' + ph.addressStreet + '",' + ph.location + ',' + ph.postalCode + ',"' + ph.telephoneNo+ '",' + ph.ownerID + ',"' + ph.brNo + '",' + ph.discount + ',' + ph.isapproved + ')';
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

exports.updatePharmacy = (conn,ph) => {
    return new Promise((resolve, reject) => {
        let sql = 'UPDATE pharmacy SET name = "' + ph.name + '", addressNo = "' + ph.addressNo + '",addressStreet = "' + ph.addressStreet + '", location = ' + ph.location + ', postalCode = ' + ph.postalCode + ', telephoneNo = "' + ph.telephoneNo + '",ownerID = ' + ph.ownerID + ', brNo = "' + ph.brNo + '", discount = ' + ph.discount + ', isapproved = ' + ph.isapproved + ' where id = ' + ph.id;
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

exports.deletePharmacy = (conn,ph) => {
    return new Promise((resolve, reject) => {
        let sql = 'DELETE FROM pharmacy where id = ' + ph.id;
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

