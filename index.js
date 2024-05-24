import express from "express"
const app=express()

app.get("/", function(req,res){
    res.send("Cannot GET / <- this error has been resolved")
    // console.log("Cannot GET / this error has been resolved");
})

app.get("/pro/info", function(req,res){
    res.send("info")
    // console.log("Cannot GET / this error has been resolved");
})

app.get("/pro/:user", function(req,res){
    res.send(`welcome ${req.params.user}`)
    // console.log("Cannot GET / this error has been resolved");
})


app.listen(3000,function(){
    console.log("server is running cool   !!!")
})