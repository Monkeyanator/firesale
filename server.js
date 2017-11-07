//server startup
const io = require('socket.io')();
const PORT = 8000; 
io.listen(PORT);

//log startup
console.log("Listening on port:" + PORT);

//server state
var itemPrice = 0;

//handle connection
io.on('connection', (socket) => {
    console.log("Client connected!");

    socket.on('disconnect', () => {
        console.log("Client disconnected.");
    });

    socket.on('increase-price', () => {
        itemPrice++;
        socket.broadcast.emit('price-increased', itemPrice);
        console.log("Item price increased to: " + itemPrice);
    })
}); 