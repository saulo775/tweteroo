import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("hello world");
});

app.listen(5001, ()=>{
    console.log("Oia o bixão ligado na porta 5001")
});