import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu </h2>
      {numPizza > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
    </main>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img alt={props.pizzaObject.name} src={props.pizzaObject.photoName} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.price + 3}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("Sorry we are closed");
  return (
    <footer>
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);