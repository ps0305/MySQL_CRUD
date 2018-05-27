//import express module
var express = require("express");

//import connection 
var conn = require("../config/db_connection");

//getting the connection object
var connection = conn.getConnection();

//connect to database
connection.connect();

//create the module(Router)
var router = express.Router();
router.post("/",function(req,res){
//reading the parameters from client
    var p_id=req.body.p_id;
    var p_name=req.body.p_name;
    var p_cost=req.body.p_cost;

    connection.query("update product set p_name ='"+p_name +"',p_cost="+p_cost+" where p_id = "+ p_id,
    function(err,result){
        if (err){
            console.log("error while updating the data !");
        }else{
            res.send({update:"success"});
        }
    });
});
//export router
module.exports=router;