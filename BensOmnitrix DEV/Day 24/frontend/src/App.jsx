import React from "react";
import NameComponent from "./components/NameComponent"
import ButtonComponent from "./components/ButtonComponent"
import InterestsComponent from "./components/InterestsComponent"
import CardWrapper from "./wrapper/CardWrapper"
import InputComponent from "./components/InputComponent";

function App() {
  return (
    <>
      <InputComponent />
      <CardWrapper>
        <div
          style={{
            padding: "20px 10px 30px 20px",
          }}
        >
          <NameComponent name={"Lokeshwar"} description={"A TA in the 100xDevs Cohort 2.0"}/>
          <InterestsComponent interests={["Ionic","Open Source","App Dev"]}/>
          <div
            style={{
              display: "flex",
            }}
          >
            <ButtonComponent title={"LinkedIn"} link={"/"} />
            <ButtonComponent title={"Twitter"} link={"/"} />
          </div>
        </div>
      </CardWrapper>
    </>
  );
}

export default App;
