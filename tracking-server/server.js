const express = require('express'),
    app = express(),
    server = require('http').createServer(app);
io = require('socket.io')(server);
let timerId = null,
    sockets = new Set();
var vehicledata = require('./data');
var localdata;
var countsExtended;

io.on('connection', socket => {
    console.log(`Socket ${socket.id} added`);
    localdata = vehicledata.data;
    sockets.add(socket);
    if (!timerId) {
        startTimer();
    }
    
    socket.on('getTrackingFeeds', data => {
        // console.log('Connected', data);
        
    });
    socket.on('getTrackingSummary', data => {
        // console.log('Connected', data);
    });
    socket.on('disconnect', () => {
        console.log(`Deleting socket: ${socket.id}`);
        sockets.delete(socket);
        console.log(`Remaining sockets: ${sockets.size}`);
    });
});
function startTimer() {
    timerId = setInterval(() => {
        if (!sockets.size) {
            clearInterval(timerId);
            timerId = null;
            // console.log(`Timer stopped`);
        }
        updateData();
        SummaryData();
        for (const s of sockets) {
            s.emit('feeds', localdata);
            s.emit('summary', countsExtended);
        }
    }, 5000);
}
function updateData() {
    
    localdata.forEach(
        (a) => {
            if(a.status == "moving") {
                a.distance += 1; 
                a.status = "stopped";
            } else if(a.status == "stopped") {
                a.status = "moving";
            }
        });
}
function SummaryData () {
    var counts = localdata.reduce((p, c) => {
        var name = c.status;
        if (!p.hasOwnProperty(name)) {
          p[name] = 0;
        }
        p[name]++;
        return p;
      }, {});
      
      countsExtended = Object.keys(counts).map(k => {
        return {name: k, count: counts[k]}; });
}
server.listen(4444);
console.log('Visit http://localhost:4444 in your browser');