
const express = require('express');
const router = express.Router();
const admin_controller = require('../controllers/admin_controller');

router.get('/view/',admin_controller.view);
router.post('/viewph/',admin_controller.viewph);

//router.get('/dept/:fac',uni_details.get_dept);

module.exports = router;
