const express=require("express")
const dotenv=require("dotenv").config()
const cors=require("cors")
const connect=require("./config/db")
const employeeRouter=require("./routes/employeeRouter")
const app=express()

app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api",employeeRouter)

app.listen(PORT,async()=>{
    await connect()
    console.log(`http://localhost:${PORT}`)
})