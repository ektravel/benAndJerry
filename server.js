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
    {name:"chunky-monkey", 
    price: 5, 
    awesomeness: 7
    },
    {name:"caramel-almond-brittle",
    price: 6, 
    awesomeness: 8
    },
    {name:"peanut-butter-half-baked", 
    price: 4, 
    awesomeness: 6
    },
    {name:"cherry-grcia", 
    price: 5, 
    awesomeness: 9
    },
    {name:"chocolate-fudge-brownie", 
    price: 4, 
    awesomeness: 6
    }
];

//Routes

app.get("/icecreams/:name", function(req, res){
    for(i=0; i < icecreams.length; i++){
        if (icecreams[i].name === req.params.name){
            return res.render("icecream", icecreams[i]);
        }
    }
});

//   * Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.
app.get("/icecreams", function(req, res){
    res.render("ics",{ics: icecreams});
});

//Start the server so that it could listen to the client request
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
});