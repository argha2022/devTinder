const express=require("express");
const app=express();

app.use("/test", (req,res)=>{
    res.send("Hello from the server ABC");
})
app.listen(3000 ,()=>{
    console.log("Server is listenning on port number 3000");
});