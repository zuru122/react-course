// Data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/////////////////////////////////////

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

// Structure

function Header() {
  return (
    <>
      <header className="header">
        <h1 style={{ textTransform: "uppercase" }}>Fast Rect Pizza Co.</h1>
      </header>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  // console.log("pizzaData:", pizzaData);
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stne oven, all organix, all delicious
            </p>

            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. please come back later :) </p>
        )}

        {/* <Pizza
          name="Pizza Spinai"
          ingredients="Tomato, morzarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />

        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mushrooms"
          price={12}
          photoName={"pizzas/funghi.jpg"}
        /> */}
      </main>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  let isOpen = hour >= openHour && hour <= closeHour;
  // ? "We're current open"
  // : "Sorry we're closed";
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <>
      <div className="order">
        <p>
          We're open from {openHour}:00 to {closeHour}:00. Come visit us or
          order online.
        </p>
        {/* {new Date().toLocaleTimeString()} {isOpen} */}
        <button className="btn">Order</button>
      </div>
    </>
  );
}

// Pizza
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  if (pizzaObj.soldOut === true) {
    return null;
  }
  return (
    <>
      <li className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.price + 3}</span>
        </div>
      </li>
    </>
  );
}

export default App;
