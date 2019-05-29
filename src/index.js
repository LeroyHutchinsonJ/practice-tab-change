import React from "react";
import ReactDOM from "react-dom";
import PageOne from "./PageOne";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <PageOne />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
