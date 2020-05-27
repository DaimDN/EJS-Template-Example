const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
var items = ["Eating apple", "Going for the SKI"];



app.use(parser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res){  
    var date = new Date();
    var Day = date.getDay();
    var year = date.getFullYear();
    var month = date.getMonth();
    var dates = date.getDate();
    var Today = "";
    var fulldata = "";

        switch(Day){
            case 3:
                Today = "Wednesday"; 
            break;
            case 4: 
            Today = "Thursday";
            break;
            case 5: 
            Today = "Friday";
            break;
            case 6: 
            Today = "Saturday";
            break;
            case 0: 
            Today = "Sunday";
            break;
            case 1: 
            Today = "Monday";
            break;
            case 2: 
            Today = "Tuesday";
            break;
            default: console.log("error");
        }

        fulldata = Today + " -   " + dates + " / " + month + " /   " + year;
    
    res.render('index', {dateinfo: fulldata, listofitems: items});
});


app.post('/', function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');

})

app.listen(port, function(req, res){
    console.log("Server is up and Running on port " + port );
});