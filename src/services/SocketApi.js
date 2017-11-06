import openSocket from 'socket.io-client';

//open the socket
const socket = openSocket('http://localhost:8000');

//
function subscribeToIncrease(callback) {
    socket.on('price-increased', timestamp => callback(null));
}

function increasePrice(){
    socket.emit('increase-price'); 
}

export { subscribeToIncrease, increasePrice };