import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

function App() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Para Generator
      </h1>
      <ParaGeneratorComponent />
    </div>
  );
}

function ParaGeneratorComponent() {
  const [inputValue, setInputValue] = useState("");
  const [paragraph, setParagraph] = useState("");
  const timeoutRef = useRef();

  const paragraphGenerator = useCallback(async () => {
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputValue }),
    });

    const data = await response.json();

    return (
      data.candidates[0].content.parts[0].text || "No paragraph generated"
    );
  }, [inputValue]);

  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "40px",
          }}
        >
          <input
            type="text"
            placeholder="Enter number of words"
            style={{
              width: "95%",
              height: "100%",
              paddingLeft: "20px",
            }}
            onChange={(e) => {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = setTimeout(() => {
                setInputValue(e.target.value);
              }, 700);
            }}
          />
        </div>
        <div
          onClick={() => {
            paragraphGenerator().then((response) => {
              console.log("Generated paragraph:", response);
              setParagraph(response);
            });
          }}
          style={{
            cursor: "pointer",
            marginLeft: "10px",
            height: "40px",
            width: "100px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Generate
        </div>
      </div>
      <div
        style={{
          paddingTop: "50px",
          paddingLeft: "325px",
          width: "50%",
          fontSize: "20px",
        }}
      >
        {paragraph}
      </div>
    </div>
  );
}

export default App;
