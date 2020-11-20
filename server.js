console.log("server is starting");
var express = require('express');
var app = express();
var server = app.listen(3000, listening);
function listening(){  //callback
  console.log("listening...");
}
app.use(express.static('blog')); //host static files like img
