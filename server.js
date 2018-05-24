//Dependecies
var express = require("express");
var exphbs = require("express-handlebars");

//Create an instance of the express app
var app = express();

// Set up the port (Heroku)
var PORT = process.env.PORT || 8080;

//Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Data
var icecreams = [
    {name:"chunky monkey", 
    price: 5, 
    awesomeness: 7
    },
    {name:"caramel almond brittle",
    price: 6, 
    awesomeness: 8
    },
    {name:"peanut butter half baked", 
    price: 4, 
    awesomeness: 6
    },
    {name:"cherry garcia", 
    price: 5, 
    awesomeness: 9
    },
    {name:"chocolate fudge brownie", 
    price: 4, 
    awesomeness: 6
    }
];

//Routes
//   * Using handlebars and express, create a route called `/icecream/:name`. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.
app.get("/icecream/:name", function(req, res){
    
})

//   * Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.
app.get("/icecreams", function(req, res){
    
})

//Start the server so that it could listen to the client request
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
});