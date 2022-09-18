const express=require("express");
const passport=require("passport");
const router=express.Router();
const patientController= require('../../controllers/api/patient_controller');

router.post('/register',patientController.create);
router.post('/:id/create-report',passport.authenticate('jwt',{session:false}),patientController.createReport);
router.get('/:id/all-reports',patientController.allReports);


module.exports=router;