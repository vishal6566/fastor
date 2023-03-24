const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const Employee = require("../models/employeeModel")

const auth=asyncHandler(async (req,res,next)=>{
    try{
        const token = req.headers?.auth?.split(" ")[1]
        if(!token){
            res.status(401)
            throw new Error("Not authorized, Please login")
        }
    
        const verified=jwt.verify(token,process.env.JWT_SECRET)
    
       
        const employee= await Employee.findById(verified.id).select("-password")
    
        if(!employee){
            res.status(401)
            throw new Error("employee not found...")
        }
        req.employee=employee
        next()
    
    } catch (err){
        res.status(401)
        throw new Error("Not authorized, Please login")
    }
    })

module.exports = auth