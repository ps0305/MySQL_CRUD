//importing modules
var express= require("express");
var fetch=require("./fetch/fetch");
var bodyparser= require("body-parser");

//create app instance
var app=express();
app.use("/fetch",fetch);

//set JSON as MIME type
app.use(bodyparser.json());

//front-end not sending any form data
app.use(bodyparser.urlencoded({extended:false}));

var insert = require("./insert/insert");
app.use("/insert",insert);

//update operation
var update= require("./update/update");
app.use("/update",update);

//delete opearation
var remove=require("./delete/delete");
app.use("/delete",remove);

//Assign port number
app.listen(8080);
console.log("server is listening at port no. 8080");