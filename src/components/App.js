import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Home username="Liza" city="New York" />
      <About image="https://i.imgur.com/mV8PQxj.gif" />
    </div>
  );
}

export default App;
