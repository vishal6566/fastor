const Form=require("../models/formModel")
const asyncHandler=require("express-async-handler")

// register form
const registerStudent=asyncHandler(
    async(req,res)=>{
        const {email,name,courseInterest,claimed}=req.body
        if(!email || !name || !courseInterest){
            res.status(400).json({message:"Please fill in all required fields",status:"400"})
        }
        
        const formExists=await Form.findOne({email})
        if(formExists){
            res.status(400).json({message:"Form is already been submitted",status:"400"})
        }
        const form=await Form.create({
            email,name,courseInterest,claimed
        })
        if(form){
            const{_id,email,name,courseInterest, claimed, claimedBy}=form
            res.status(201).json({
                _id,email,name,courseInterest, claimed, claimedBy
                })
        }
        else{
            res.status(400).json({message:"Invalid form data",status:"400"})
          
          }
    }
)

// get all form

const getAllForm=asyncHandler(async(req,res)=>{
    const forms=await Form.find()
    if(forms){
        res.send(forms)
    }else{
        res.status(400)
        throw new Error ("forms not found")
       }
})



module.exports={registerStudent,getAllForm}
