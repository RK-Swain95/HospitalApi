const express=require("express");
const router=express.Router();
const DoctorController=require('../../controllers/api/doctor_controller');

router.post('/register',DoctorController.create);
router.post('/login',DoctorController.createSession);
module.exports=router;