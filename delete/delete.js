//import express module
var express = require("express");

//import connection 
var conn = require("../config/db_connection");

//getting the connection object
var connection =conn.getConnection();

//connect to database
connection.connect();

//create the module(Router)
var router = express.Router();
router.post("/",function(req,res){
//reading the parameters from client
    var p_id=req.body.p_id;
    

    connection.query("delete from product where p_id ="+p_id,
    function(err){
    if (err){
            console.log("error while deleting the data !");
        }else{
            res.send({delete:"success"});
        }
    });
});
//export router
module.exports=router;