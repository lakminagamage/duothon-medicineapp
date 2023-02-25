
const express = require('express');
const router = express.Router();
const med_con = require('../controllers/med_controller');

router.post('/addmed/',med_con.addmed);
router.post('/updatemed/',med_con.updatemed);
router.post('/deletemed/',med_con.deletemed);
router.post('/seemed/',med_con.viewmed);

//router.get('/dept/:fac',uni_details.get_dept);

module.exports = router;
