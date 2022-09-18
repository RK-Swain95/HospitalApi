const express=require("express");
const router=express.Router();
const DoctorController=require('../../controllers/api/doctor_controller');
const passport=require("passport");

router.post('/register',DoctorController.create);
router.post('/login',DoctorController.createSession);
module.exports=router;