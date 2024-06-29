const express = require("express")
const app=express()
const port=process.env.port || 5000;


app.get("/test",(req,res)=>{
    res.status(200).send({message: "e-commerce project is running"})
})
app.post("/test",(req,res)=>{
    res.status(200).send({message: " post: e-commerce project is running"})
})
app.delete("/test",(req,res)=>{
    res.status(200).send({message: " delete: e-commerce project is running"})
})
app.put("/test",(req,res)=>{
    res.status(200).send({message: " put: e-commerce project is running"})
})

app.listen(port, ()=>{
    console.log(`e-commerce server is running on port:${port}`)
})