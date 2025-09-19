import React from 'react'

function InterestsComponent({interests}){
  return (
    <>
      <h3>Interests</h3>
      <ul>
        {interests.map((interest) => {
          return <li>{interest}</li>
        })}
      </ul>
    </>
  )
}

export default InterestsComponent
