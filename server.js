//importing modules
var express= require("express");
var fetch=require("./fetch/fetch");
var bodyparser= require("body-parser");
var update= require("./update/update");
var remove=require("./delete/delete");

//create app instance
var app=express();
app.use("/fetch"/fetch);

//set JSON as MIME type
app.use(bodyparser.JSON());

//front-end not sending any form data
app.use(bodyparser.urlencoded({extended:false}));

var insert = require("./insert/insert");
app.use("insert",insert);
app.use("update",update);
app.use("delete",remove);

//
app.listen(8080);
console.log("server is listening at port no. 8080");