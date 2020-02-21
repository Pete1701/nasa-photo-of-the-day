import React from "react";
import "./App.css";
import Apod from "./apod";
import { Alert } from 'reactstrap';
import styled from 'styled-components';

const MainTitle = styled.h1`
    color: red;

    @media (min-width: 1200px) {
      font-size: 4rem;
    }

    @media (max-width: 500px) {
      font-size: 1.8rem;
    }
`;

function App() {
  return (
    <div className="App">
      <Alert color="primary">
        <MainTitle>Astronomy Picture of the Day</MainTitle>
        <Apod />       
      </Alert>
    </div>
  );
}

export default App;
