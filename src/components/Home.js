import React from "react";

function Home(Username,City) {
  return (
    <div id="home">
      <h1>
        {Username.username} is a Web Developer from {City.city}
      </h1>
    </div>
  );
}

export default Home;