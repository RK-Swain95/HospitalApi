const express=require('express');
const router=express.Router();
const passport=require("passport");

router.use('/doctors',require('./doctor'));
router.use('/patients',require('./patient'));
router.use('/reports',require('./reports'));


module.exports=router;