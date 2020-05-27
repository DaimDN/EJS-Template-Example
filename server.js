const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
var items = ["Eating apple", "Going for the SKI"];



app.use(parser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res){  
res.render('index');
});




app.listen(port, function(req, res){
    console.log("Server is up and Running on port " + port );
});