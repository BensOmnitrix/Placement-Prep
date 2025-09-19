import React from 'react'

function CardWrapper({ children }) {
  return (
    <>
      <div
        style={{
          border: "1px solid white",
          boxShadow: "0.7px 0.7px 10px black",
          borderRadius: "7px",
          width: "400px",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default CardWrapper
