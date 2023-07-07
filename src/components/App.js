import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import ProductCards from "./Cards";
import Footer from "./Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <Header />
      <div style={{ paddingTop: "20px" }}>
        <SubHeader />
      </div>
      <ProductCards />
      <div style={{ paddingTop: "30px" }}>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
