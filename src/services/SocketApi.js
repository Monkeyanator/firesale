import openSocket from 'socket.io-client';

//open the socket
const socket = openSocket('http://localhost:8000');

//
function subscribeToIncrease(auctionId, callback) {
    socket.on('price-increased', itemPrice => callback(itemPrice));
}

function increasePrice(auctionId){
    socket.emit('increase-price', {'auctionId': auctionId}); 
}

function requestPrice(auctionId, callback){
    socket.emit('request-price', {'auctionId': auctionId});     
    socket.on('current-price', currentPrice => callback(currentPrice));
}

export { subscribeToIncrease, increasePrice , requestPrice };