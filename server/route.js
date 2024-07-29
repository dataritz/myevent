const express = require('express')
const {home,signUp,addEvent,searchName,searchDate} = require('./controller')
const router = express.Router();
//All route

router.route('/').get(home);
// router.route('/signin').get(signIn);
router.route('/signup').post(signUp);
router.route('/addevent').post(addEvent);
router.route('/searchdate').get(searchDate);
router.route('/searchname').get(searchName);


module.exports = router;