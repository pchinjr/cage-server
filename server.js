// server.js
var express = require('express');
var app = express();
var server = require("http").createServer(app);
var io = require('socket.io')(server);
var port = 3000;

//create the node server and serve the files
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
        res.sendFile(__dirname + '/public/index.html');
});
server.listen(port);
console.log('Cage Bot is now available to worship at http://45.55.86.193:' + port);

//SocketIO connection handler and listening
io.on('connect', function (socket) {
        console.log("your socket id is ", socket.id);

        socket.on('public-join', function(data) {
          console.log('worshiper connected');
        });
        
        socket.on('cage-pi-connect', function(data) {
            console.log(data);
        });

        socket.on('disconnect', function() {
          console.log('browser closed');
        })
});

