var express = require('express');
var app = express();
var socketIO = require('socket.io');
var io;

app.use(express.static('public'));

//app.get('/', function(req, res) {
  //res.send('<h2>Hello Express<h2>');
//});

var server = app.listen(8081, function() {
  console.log('Node app running on port 8081.');

});

io = socketIO(server);

io.on('connection', newConnection);

function newConnection(socket) {
  console.log("new connection:" + socket.id);

  socket.on('printMsg', printData);
    function printData(data8) {
      socket.broadcast.emit('printMsg', data8);
      console.log(data8);


    }


}
