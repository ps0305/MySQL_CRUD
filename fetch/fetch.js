//import connection
var conn =require("../config/db_connection");

//setting the connection object
var connection=conn.getConnection();

//connect to database
connection.connect();

//import express
var express=require("express");

//create the router
var router=express.Router();

//get request
router.get("/" ,function(req,res){
    connection.query("select * from products", function(err,recordArray,fields){
        if (err){
            console.log("Error occured while fetching the data !")
        }else{
            res.send(recordArray);
        }
    });
});
//export the router
module.exports=router;