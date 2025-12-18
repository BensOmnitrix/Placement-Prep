import express from "express";
import { createClient } from "redis";

const client = createClient();
client.on("error", (e) => console.error(e));

const app = express();
app.use(express.json());

app.post("/submit", async (req, res) => {
  const { problem, userId, code, language } = req.body;
  try {
    await client.lPush(
      "queue:submissions",
      JSON.stringify({ problem, userId, code, language })
    );
    res.status(200).send("Submitted successfully");
} catch (e) {
    console.error(e);
    res.status(404).send("Submission failed");
  }
});

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to Redis");

    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();
