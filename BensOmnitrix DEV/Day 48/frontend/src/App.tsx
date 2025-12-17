import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState<string>("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState([
    {
      message: "Start the conversation",
    },
  ]);

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.1.9:8080");
    ws.onopen = () => {
      console.log("Connection is established");
      setSocket(ws);
    };
    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMessages((m) => [...m, message]);
    };
    return () => ws.close();
  }, []);

  if (!socket) {
    return <div>Connecting to websockets server...</div>;
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter the message"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          socket?.send(JSON.stringify({ message: input }));
        }}
      >
        Send the message
      </button>
      <br />
      <br />
      <br />
      <br />
      {messages.map(({ message }) => {
        return <div>{message};</div>;
      })}
    </div>
  );
}
