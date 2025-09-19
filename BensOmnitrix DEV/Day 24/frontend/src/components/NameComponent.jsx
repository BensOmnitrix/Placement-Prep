import React from 'react'

function NameComponent({ name, description }) {
  return (
    <>
      <h2>{name}</h2>
      <div>{description }</div>
    </>
  );
}

export default NameComponent
