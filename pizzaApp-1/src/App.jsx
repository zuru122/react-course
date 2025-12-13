import { useState } from "react";
import Pizza from "./component/Pizza";
import pizzaData from "./data/data.jsx";

function App() {
  return (
    <>
      <Pizza pizzas={pizzaData} />
    </>
  );
}

export default App;
