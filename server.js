/**
 * Created by Jazz-Pc on 7/2/2017.
 */

const express = require("express");
var app = express();
const hbs = require("hbs");
const MongoClient =require("mongodb").MongoClient;


MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
       return  console.log("Unable to connect");
    }
    console.log("Connected Successfully");
    db.collection('Todos').find().toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,5));
    })

   /* db.collection('Todos').insertOne({
        text:"Jaspher Raj Oswald",
        completed:false
    },(err,response)=> {
        console.log(response);
    });*/
    db.close();
})





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