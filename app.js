const express = require('express');
const app = express();
const http = require('http');
const hbs = require('hbs');
const socketIO = require('socket.io');
const delay = require('delay');

var server = http.createServer(app);
var io = socketIO(server);

var port = process.env.PORT || 3000;

io.on('connection',function(socket){

    console.log("A user connected");

    socket.on('data', function(data){
        myPesan = data.toLowerCase();

        console.log("Pesan: " + myPesan);

        io.emit("data",{
            pesan:myPesan
        });

      });

});

server.listen(port,function(){
    console.log("Server is running");
    console.log("At " + port);
});