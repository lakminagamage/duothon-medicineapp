
const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_Controller');

router.get('/view/',user_controller.view);

//router.get('/dept/:fac',uni_details.get_dept);

module.exports = router;
