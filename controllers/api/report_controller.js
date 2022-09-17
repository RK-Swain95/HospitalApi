const Report = require('../../models/reports');
//to show patients reports by their status
module.exports.reportStatus = async function (req, res) {
 
    try{
     let reports= await Report.find({ status: req.params.status });
       //if their is no patients
     if (!reports) {
        return res.json(200,{
            message: "No record found"
        });
    } else {
       //if patients found by status
        return res.json(200,{
            message:"reports getting successfully",
            data: reports
        });
    }

    }catch{
                return res.json(500,{
                message: "Internal Server Error",
            });
    }
   
}