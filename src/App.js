import React from "react";
import "./App.css";
import Apod from "./apod";
import { Alert } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Alert color="primary">
        <h1>Astronomy Picture of the Day</h1>
        <Apod />       
      </Alert>
    </div>
  );
}

export default App;
