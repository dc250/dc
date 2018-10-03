const http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var fs=require("fs");
const hostname = '192.168.31.113';
const port = 8888;
app.use(express.static('lib'));
app.get("/index.html", function(request, response) {
   fs.readFile("./"+request.path.substr(1),function(err,data){
        // body
        if(err){
            console.log(err);
            //404：NOT FOUND
            response.writeHead(404,{"Content-Type":"text/html"});
        }
        else{
            //200：OK
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data.toString());
        }
        response.end();
    });
});
var str = 'haha';

app.get('/',(req,res)=>{
  res.writeHead(200,{
    "Content-Type":'text/plain',
    'charset':'utf-8','Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
  let {contect:A} = req.query;
  res.write('node服务器解析后的数据为'+A);

  res.end();
})
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
