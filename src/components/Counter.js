import React from "react";

const Counter = ({ counter, setCounter, index, counterValue }) => {
  console.log(counter);
  return (
    <div class="calculator">
      <div className="compteur">
        <button
          onClick={() => {
            // Créer une copie
            const newCounters = [...counter];
            // Modifier la copie
            newCounters[index]--; //ou newCounters[index] = newCounter[index] - 1
            // Mettre à jour le state avec la copie
            setCounter(newCounters);
          }}
        >
          -
        </button>
        <p>{counterValue}</p>
        <button
          onClick={() => {
            // Créer une copie
            const newCounters = [...counter];
            // Modifier la copie
            newCounters[index]++;
            // Mettre à jour le state avec la copie
            setCounter(newCounters);
          }}
        >
          +
        </button>
      </div>
      <br></br>
      <button
        className="reset"
        onClick={() => {
          // Créer une copie
          const newCounters = [...counter];
          // Modifier la copie
          newCounters[index] = newCounters[index] = 0;
          // Mettre à jour le state avec la copie
          setCounter(newCounters);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
