import React from "react";
import ReactDOM from "react-dom/client";
function Greeting() {
  return (
    <div>
      <h1 id="react">Hello React</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting></Greeting>);
