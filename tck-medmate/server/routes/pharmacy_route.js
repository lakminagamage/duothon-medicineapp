
const express = require('express');
const router = express.Router();
const ph_controller = require('../controllers/pharmacy_controller');

router.post('/addph/',ph_controller.addph);
router.post('/updateph/',ph_controller.updateph);
router.post('/deleteph/',ph_controller.deleteph);

//router.get('/dept/:fac',uni_details.get_dept);

module.exports = router;
