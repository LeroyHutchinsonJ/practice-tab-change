import React from "react";
import ReactDOM from "react-dom";
import PageOne from "./PageOne";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageOne />
        Testing Testing
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
