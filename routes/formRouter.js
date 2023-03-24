const express=require("express")
const {registerStudent, getAllForm}=require("../controllers/formController")
const auth=require("../middlewares/authentication")
const router=express.Router()

router.post("/registerform",registerStudent)
router.get("/getform",auth,getAllForm)
module.exports=router