import openSocket from 'socket.io-client';

//open the socket
const socket = openSocket('http://localhost:8000');

//
function subscribeToIncrease(callback) {
    socket.on('price-increased', itemPrice => callback(itemPrice));
}

function increasePrice(){
    socket.emit('increase-price'); 
}

function requestPrice(callback){
    socket.emit('request-price');     
    socket.on('current-price', currentPrice => callback(currentPrice));
}

export { subscribeToIncrease, increasePrice , requestPrice };