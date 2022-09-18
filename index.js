const express=require("express");
const app= express();
app.use(express.json());
const {connection}=require("./Config/db.js")
const {todoRouter}= require("./Routes/todo.routes")

app.get("/", (req,res)=>{
    res.send("welcome to home")
})

app.use("/todos", todoRouter)

app.listen(8080, async()=>{
    try{ 
        await connection
        console.log("connected to db successfully")
    }
    catch(err){
        console.log("Failed to connect to db")
        console.log(err)
    }
    console.log("listening on port 8080")
})