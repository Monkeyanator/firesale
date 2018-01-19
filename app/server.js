//-=-=-=-=-=-
//SOCKET IO SERVER SETUP 
//-=-=-=-=-=-

//server startup
const io = require('socket.io')();
const SOCKET_PORT = 8000; 
io.listen(SOCKET_PORT);

//log startup
console.log("Socket server on port: " + SOCKET_PORT);

//server state
var prices = {};
var itemPrice = 0;

//handle connection
io.on('connection', (socket) => {
    console.log("Client connected!");

    socket.on('request-price', (auctionIdData) => {
        var auctionId = auctionIdData.auctionId;
        console.log("Price requested for auction ID: " + auctionId);

        socket.join(auctionId);
        console.log("Client joined room: " + auctionId);

        if(auctionId in prices){
            io.to(auctionId).emit('current-price', prices[auctionId]);
        } else {
            prices[auctionId] = 0;
            io.to(auctionId).emit('current-price', 0);
        }

    }); 

    socket.on('disconnect', () => {
        console.log("Client disconnected.");
    });

    socket.on('increase-price', (auctionIdData) => {
        //grab the auctionId
        console.log("why is this getting.jldkjfals");
        console.log(auctionIdData);
        var auctionId = auctionIdData.auctionId;
        prices[auctionId]++; 
        console.log(prices[auctionId]);

        socket.broadcast.to(auctionId).emit('price-increased', prices[auctionId]);
        console.log("Item price increased to: " + prices[auctionId]);
    })
}); 


//-=-=-=-=-=-
//EXPRESS REST API STUFF 
//-=-=-=-=-=-

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//so our server can handle normal POSTs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var EXPRESS_PORT = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res){
    res.json({message: 'Here comes an API! OH BOI'});
});

console.log("Express server on port: " + EXPRESS_PORT);

var mongoose = require('mongoose');
mongoose.connect('mongodb://sammnaser:Sabrina1464+@ds255787.mlab.com:55787/firesale');

var Auction = require('./models/auction');

//middleware
router.use(function(req, res, next){
    console.log('Request being processed...');
    next(); 
});

//test route
router.get('/', function(req, res){
    res.json({message: 'It is happening!'});
});

router.route('/auctions')

    //create an article
    .post(function(req, res){

        var auction = new Auction();
        auction.itemName = req.body.itemName;
        auction.imageUrl = req.body.imageUrl;
        auction.description = req.body.description;

        //save auction
        auction.save(function(err){
            //return the error in response if it exists
            if (err){
                res.send(err);
                console.log(err);
            }
            
            res.json({message: 'Auction created!'});
        }); 

    })
    
    //get route 
    .get(function(req, res){

        Auction.find(function(err, auctions){
            if (err){
                res.send(err);
                conosle.log(err); 
            }

            res.json(auctions);

        }); 

    }); 

app.use('/api', router);
app.listen(EXPRESS_PORT);