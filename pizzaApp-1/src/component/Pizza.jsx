import React from "react";

function Pizza({ pizzas }) {
  return (
    <div className="pizza-container">
      {/* <h1 className="heading">Fast React Pizza Co.</h1> */}
      {pizzas.map((pizza) => (
        <div
          key={pizza.name}
          className={`${
            pizza.soldOut
              ? `sold-out pizza-card pizza pizza-flex`
              : `pizza pizza-flex pizza-card `
          }`}
        >
          <div>
            <img src={pizza.photoName} alt={pizza.name} />
          </div>
          <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <span className={pizza.soldOut ? `sold-label` : ""}>
              {pizza.soldOut ? "SOLD" : pizza.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pizza;
