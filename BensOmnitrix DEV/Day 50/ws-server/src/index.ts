import express from "express";
import { createClient } from "redis";
import WebSocket, { WebSocketServer } from "ws";

const client = createClient();
const app = express();

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to Redis");
  } catch (err) {
    console.error(err);
  }
}

startServer();

const httpServer = app.listen(8080, () => {
  console.log("Server is listening on 3000");
});

const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", (ws) => {
  ws.on("message", (data, isBinary) => {
    const userId = JSON.parse(data.toString()).userId;

    client.subscribe(`userId:${userId}`, (message) => {
        ws.send(JSON.parse(message).status);
    });
  });

  ws.on("error", (e) => console.error(e));

  ws.on("close", (code, reason) => {
    console.log("Websocket connection has been closed");
  });
});
