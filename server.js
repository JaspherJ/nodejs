/**
 * Created by Jazz-Pc on 7/2/2017.
 */

const express = require("express");
var app = express();
const hbs = require("hbs");

app.use(express.static( 'public'));

app.set('view engine','hbs');

hbs.registerPartials(__dirname +'/views/partials')
app.get('/',function (req,response) {
    response.send("Welcome to the world of coders")
});

app.get('/about',function (req,response) {
    response.render("about.hbs",{
        title:'copyright',
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000);