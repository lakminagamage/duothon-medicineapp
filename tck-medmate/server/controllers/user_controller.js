const mysql = require('mysql2');
const commonFunctions = require('./common_functions');
const pharmacy_api = require('./pharmacy_apis');
const owner_api = require('./owner_apis');
const location_api = require('./location_apis');
const user_api = require('./users_apis');
const cat_api = require('./category_apis');

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_TOKEN,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

exports.view = async (req, res) => {
    let cats,locations;

    try {
        cats = await cat_api.getCategory(conn);
        console.log(cats);
    } catch (e) {
        console.log('Error : ' + e);
    }

    try {
        locations = await location_api.getLocations(conn);
        console.log(locations);
    } catch (e) {
        console.log('Error : ' + e);
    }  

    let districts = [],ava;

    locations.forEach(element => {
        ava = false;
        districts.forEach(element2 => {
            if(element2 == element.district){
                ava = true;
            }
        })
        if(ava==false){
            districts.push(element.district);
        }
    });

    res.render('userview', {cats : cats, locs : locations, districts : districts});
}