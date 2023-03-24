const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const employeeSchema=mongoose.Schema({
    email:{
        type:String,
        require:[true,"Please enter yoyr email"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"Please enter Password"],
      
        minLength:[6,"Password must be atleast 6 characters long"]
    }
})

employeeSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(5)
    const hashedPassword=await bcrypt.hash(this.password,salt)
    this.password=hashedPassword
    next()
})

const Employee=mongoose.model("employee",employeeSchema)
module.exports=Employee