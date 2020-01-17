// importing modules(commonjs)
const express = require("express");
const fetch = require("./fetch/fetch");
const bodyparser = require("body-parser");

// create app instance
let app = express();
app.use("/fetch", fetch);

// set JSON as MIME type
app.use(bodyparser.json());

// check for form data
app.use(bodyparser.urlencoded({ extended:false }));

var insert = require("./insert/insert");
app.use("/insert",insert);

// update
let update = require("./update/update");
app.use("/update", update);

// delete
let remove = require("./delete/delete");
app.use("/delete", remove);

// Assign port number
app.listen(8080);
console.log("server is listening at port no. 8080");
