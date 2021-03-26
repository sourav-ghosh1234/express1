const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const fs=require('fs')


//middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))



app.post("/student/add",(req,res)=>{
    fs.writeFile("data.json",JSON.stringify(req.body),(err,data)=>{
        if(err){
            console.log(err)
        }else{
            return res.send({"result":"Success"})
        }
    })
})

app.get("/student/getDetails",(req,res)=>{
    fs.readFile("data.json",(err,data)=>{
        if(err){
            console.log(err)
        }else{
            return res.send(JSON.parse(data))
        }
    })
})





app.listen(8000,()=>{
    console.log("connected to port 8000");
})