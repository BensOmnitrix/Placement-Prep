import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
        <h1 className="bg-red-500 text-black p-4 mb-4 rounded-2xl">Tailwind Test</h1>
        <Card></Card>
        <Card></Card>
    </>
  );
}

export default App;
