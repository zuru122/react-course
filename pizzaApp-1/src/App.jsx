import { useState } from "react";
import Pizza from "./component/Pizza";
import pizzaData from "./data/data.jsx";
import Footer from "./component/Footer.jsx";
import Header from "./component/header.jsx";

function App() {
  return (
    <>
      <Header />
      <Pizza pizzas={pizzaData} />
      <Footer />
    </>
  );
}

export default App;
