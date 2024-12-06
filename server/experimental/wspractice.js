// const express = require("express");
// const WebSocket = require("ws");
// const fs = require("fs").promises;


// const app = express();

// app.get("/",async (req,res)=>{
//     try { 
//         const logData = `Request Method: ${req.method}\nRequest URL: ${req.url}\nHeaders: ${JSON.stringify(req.headers)}\n\n`; 
//         await fs.appendFile("../logs/requestlog.txt", logData); 
//         await fs.appendFile("../logs/requestlog.txt", "\n\n\n\n\n\n");
//          res.send("hello"); 
//     } 
//     catch (error) { 
//         console.error('Error writing to log file:', error); res.status(500).send('Internal Server Error'); 
//     }
// });


// const myServer = app.listen(9876,()=>{
//     console.log("server is running");
// }) ;



// const wsServer = new WebSocket.Server({
//     noServer: true
// })                                      // a websocket server

// wsServer.on("connection", function(ws) {    // what should a websocket do on connection
//     ws.on("message", function(msg) {        // what to do on message event
//         wsServer.clients.forEach(function each(client) {
//             if (client.readyState === WebSocket.OPEN) {     // check if client is ready
//               client.send(msg.toString());
//             }
//         })
//     })
// })

// myServer.on('upgrade', async function upgrade(request, socket, head) {      //handling upgrade(http to websocekt) event

//     // accepts half requests and rejects half. Reload browser page in case of rejection
    
//     if(Math.random() > 0.5){
//         return socket.end("HTTP/1.1 401 Unauthorized\r\n", "ascii")     //proper connection close in case of rejection
//     }
    
//     //emit connection when request accepted
//     wsServer.handleUpgrade(request, socket, head, function done(ws) {
//       wsServer.emit('connection', ws, request);
//     });
// });







const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('A new client connected!');

    // Listen for messages from clients
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Echo the message back to the client
        socket.send(`You said: ${message}`);
    });

    // Handle client disconnect
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');























