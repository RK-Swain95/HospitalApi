const express=require('express');
const router=express.Router();
const passport=require("passport");

router.use('/api',require('./api/index'));

module.exports=router;