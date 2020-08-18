import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import { ReactComponent as ReactIcon } from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Boostrap</h1>
      <Button variant="primary">Inicio</Button>

      <ReactIcon />
    </div>
  );
}

export default App;
