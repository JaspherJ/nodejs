const request = require("request");

request.get("https://maps.googleapis.com/maps/api/geocode/json?address=%201500%20sparkman%20Drive%20huntsville",
    (error,response,body)=> {
    console.log(response);
         var parse = JSON.parse(body)
        console.log(parse.results[0].formatted_address);
        console.log(parse.results[0].formatted_address);
        console.log(parse.results[0].geometry.location);



    });

/*
request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=%201500%20sparkman%20Drive%20huntsville',
    json:true}, (error,response,body)=> {
    console.log(body.results[0].formatted_address);
});*/
