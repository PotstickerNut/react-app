import "./App.css";
import { useState } from "react";

const [firstCity, second] = ["Tokyo", "Tahoe City", "Bend"];

console.log(firstCity);
console.log(second);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
