const express = require('express')
const multer  = require('multer')
const {home,signUp,addEvent,searchName,searchDate,signIn} = require('./controller')
const router = express.Router();
//All route
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage });

router.route('/').get(home);
router.route('/signin').post(signIn);
router.route('/signup').post(signUp);
router.route('/addevent').post(upload.single('eventimg'),addEvent);
router.route('/searchdate').get(searchDate);
router.route('/searchname').get(searchName);


module.exports = router;
