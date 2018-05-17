var express= require("express");
var fetch=require("./fetch/fetch");

var app=express();
app.use("/fetch"/fetch);
app.listen(8080);
console.log("server is listening at port no. 8080");