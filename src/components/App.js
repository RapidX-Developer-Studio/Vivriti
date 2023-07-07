import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Card from "./Cards";

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "20px" }}>
        <SubHeader />
      </div>
      <Card />
    </div>
  );
}

export default App;
