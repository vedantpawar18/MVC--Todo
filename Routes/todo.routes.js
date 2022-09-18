const {Router}=require("express");
const {TodoModel}= require("../Models/TodoModel")
const todoRouter= Router();

todoRouter.post("/create", async(req,res)=>{
    const payload= req.body;
    const new_topic=new TodoModel(payload)
    await new_topic.save();
    res.send("Successfully added")
})

todoRouter.put("/:id", async(req,res)=>{
    const payload=req.body;
    var idparam = req.params["id"]
    await TodoModel.updateOne({id:idparam},{$set:{id:payload.id, todo:payload.todo, status:payload.status}})
    res.send("todo updated")
})

todoRouter.delete("/:id", async(req,res)=>{
    var id = req.params["id"]
    await TodoModel.deleteOne({id:id})
    res.send("todo deleted")
})

todoRouter.get("/", async(req,res)=>{
    const result= await TodoModel.find();
    res.send(result) 
})

module.exports= {todoRouter}