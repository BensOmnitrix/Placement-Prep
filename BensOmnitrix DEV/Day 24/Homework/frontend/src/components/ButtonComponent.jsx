import React from 'react'

function ButtonComponent({ title, link }) {
  return (
    <div
      style={{
        backgroundColor: "#00a2ffe8",
        color: "white",
        padding: "7px 10px",
        borderRadius: "5px",
        marginRight: "20px",
        cursor: "pointer",
      }}
    >
      <a
        href={link}
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        {title}
      </a>
    </div>
  );
}

export default ButtonComponent
