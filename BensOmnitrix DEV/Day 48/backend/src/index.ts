import express from "express";
import WebSocket from "ws";
import { WebSocketServer } from "ws";

const app = express();

const httpServer = app.listen(8080);

const wss = new WebSocketServer({server: httpServer});

wss.on('connection',(ws) => {
    ws.on('error', console.error);
    ws.on('message', (data,isBinary) => {
        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN){
                client.send(data,{binary: isBinary});
            }
        })
    })
    ws.on('close',(code,reason) => {
        wss.clients.forEach(client => {
            client.send("Connection is closed");
        })
    })

    ws.send("Connection is established");
})