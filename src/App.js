import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faCalculator);

function App() {
  const [counter, setCounter] = useState([0, 0]);

  return (
    <div>
      <div className="title">
        <FontAwesomeIcon icon="calculator" size="3x" color="purple" />

        <h1>React Counter V2</h1>
      </div>
      <button
        className="add"
        onClick={() => {
          //crée une copie
          const newCounter = [...counter];
          //modifie la copie
          newCounter.push(0);
          //pour que react comprenne que cela est un nouveau tableau
          setCounter(newCounter);
        }}
      >
        Add Counter
      </button>
      <div className="map">
        {counter.map((counterValue, index) => {
          return (
            <Counter
              counter={counter}
              setCounter={setCounter}
              index={index}
              counterValue={counterValue}
            />
          );
        })}
      </div>

      <br></br>
      <br></br>
    </div>
  );
}

export default App;
