import React from 'react'
import bg from "./assets/background.png";
import bg_ from "./assets/background_.jpg"

function App() {
  return (
    <>
      <ProfileComponent name={"Rita Correia"} location={"London"} stats={[
        ["Followers", "80K"],
        ["Likes", "803K"],
        ["Photos", "1.4K"]
      ]}/>
    </>
  )
}

function ProfileComponent({name, location, stats}){
  return (
    <div style={{
      height: "500px",
      width: "400px",
      borderRadius: "10px",
      boxShadow: "0.2px 0.2px 5px black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <div style={{
        height: "50%",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}></div>
      <div style={{
        border: "2px solid black",
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        backgroundImage: `url(${bg_})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        bottom: "70px"
      }}></div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        bottom: "50px"
      }}>
        <div style={{
          fontSize: "30px",
          fontWeight: "200"
        }}>{name}</div>
        <div style={{
          fontSize: "15px",
          color: "gray",
        }}>{location}</div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        borderTop: "2px solid black",
        marginBottom: "15px"
      }}>
        {stats.map((stat) => {
          return <StatBlock stat={stat}/>
        })}
      </div>
    </div>
  )
}

function StatBlock({stat}){
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "10px"
    }}>
      <div style={{
        fontSize: "25px",
        fontWeight: "bold"
      }}>{stat[1]}</div>
      <div style={{
        fontSize: "15px",
        color: "gray"
      }}>{stat[0]}</div>
    </div>
  )
}

export default App
