// reference Tutorials Point - https://www.youtube.com/playlist?list=PLWPirh4EWFpGNfj9K0dwb0nJAOXwD9BMg
const express = require('express');
const app = express();

/*
general form 
app.method(path, handler)
* there can be multiple handlers
*/

// ROUTING

app.get('/', function(req, res){  // "/" indicates the root directory
        res.send("This is Express\n cool..."); // this will send message to client side
});

app.get('/facebook', function(req, res){
        console.log("redirecting to facebook"); // this will send mssg to serber side
        res.render('https://www.facebook.com/')
});

app.get('/*list', function(req, res){  // * representing any no. of chars before list
        console.log("Notice the Asteric sign");
        res.send(3+" lists");
});


// URL BINDING AND READING req
app.get('/:id', function(req, res){   // we can also use regex (regular expressins) by applying constraints eg. :id([0-9]{5})
        res.send(`id is: ${req.params.id}`)
        res.send()
});


//      MIDDLEWARE (COOKIES)
app.listen(3000, fuc = ()=>{
        console.log("Server Started...");
});
 

