const express=require("express")
const {registerStudent, getAllForm, getAllClaimedForm, getAllUnclaimedForm, claimForm, loggedEmployeeClaimForm}=require("../controllers/formController")
const auth=require("../middlewares/authentication")
const router=express.Router()

router.post("/registerform",registerStudent)
router.get("/getallform",auth,getAllForm)
router.get("/getclaimedform",auth,getAllClaimedForm)
router.get("/getunclaimedform",auth,getAllUnclaimedForm)
router.patch("/claimform/:id",auth,claimForm)
router.get("/loggedinuserform",auth,loggedEmployeeClaimForm)
module.exports=router