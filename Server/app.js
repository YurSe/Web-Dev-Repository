const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, '../Client/Autorization-Page.html'));
});
app.use('/', function (req, res) {
  res.sendfile(path.join(__dirname, '../Client/UserPage.html'));

})


const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/Autorization", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/UserPage.html");
});
app.post("/Autorization", urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.send(`Hello,${request.body.username}`);
});

app.get("/", function(request, response){
  response.send("UserPage");
});


app.use (bodyParser.urlencoded({extended:true}));
app.use (bodyParser.json());
app.use (express.static(path.join(__dirname, '../Client')));

setTimeout(function(){
  app.listen(3000, function () {
    console.log('Server starts on port 3000, stand by.');
  });
}, 2000);


