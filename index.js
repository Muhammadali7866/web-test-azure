const express = require("express");
const app = express();

const {BlobServiceClient}=require("@azure/storage-blob")



app.get("/",(req,res)=>{
res.send("hello world")
})


app.listen(3000,()=>{
  console.log("server is runing ok");
})
