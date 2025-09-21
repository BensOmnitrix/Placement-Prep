import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("orange");
  return (
    <div style={{
      position: "absolute",
      top: "5px",
      width: "100%",
      backgroundColor: bgColor,
      minHeight: "100vh",
    }}>
      <ColorChangerComponent setBgColor={setBgColor}/>
    </div>
  );
}

function ColorChangerComponent({setBgColor}) {
  const [colors, setColors] = useState([
    {
      colorName: "Red",
      value: "red",
      textColor : "white"
    },
    {
      colorName: "Yellow",
      value: "yellow",
      textColor : "black"
    },
    {
      colorName: "Black",
      value: "black",
      textColor : "white"
    },
    {
      colorName: "Purple",
      value: "purple",
      textColor : "white"
    },
    {
      colorName: "Green",
      value: "green",
      textColor : "white"
    },
    {
      colorName: "Blue",
      value: "blue",
      textColor : "white"
    },
    {
      colorName: "Default",
      value: "orange",
      textColor : "white"
    },
  ]);
  return (
    <div
      style={{
        height: "50px",
        width: "50%",
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "10px",
        boxShadow: "0.7px 0.7px 5px black"
      }}
    >
      {colors.map(({colorName, value, textColor}) => {
        return <Button setBgColor={setBgColor} colorName={colorName} value={value} textColor={textColor}/>
      })}
    </div>
  );
}

function Button({setBgColor,colorName,value,textColor}) {

  return (
    <div onClick={() => {
        setBgColor(value)
      }} style={{
      cursor: "pointer",
      backgroundColor: `${value}`,
      borderRadius: "5px",
      margin: "10px 0px",
      width: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: `${textColor}`
    }}>
      <a style={{
        textDecoration: "none",
        padding: "0px 5px"
      }}>{colorName}</a>
    </div>
  )
}

export default App;
