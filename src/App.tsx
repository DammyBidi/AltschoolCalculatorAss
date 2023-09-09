import { FC, useState } from 'react';
import {
  Hash,
  RotateCcw,
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
} from 'react-feather';

import './style.css';

export const App = () => {
  const [count, setCount] = useState(0);
  if (count < 0) setCount(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  const handleBiggerIncrement = () => setCount(count + 10);
  const handleBiggerDecrement = () => setCount(count - 10);
  const generateRandomNumber = () =>
    setCount(Math.floor(Math.random() * 100) + 1);

  return (
    <main>
      <div className="counter-card">
        <div className="counter">
          <p>Current Value:</p>
          <h3 id="counter-value" className="counter-value">
            {count}
          </h3>
        </div>
        <div className="buttons-container">
          <p className="button" id="add1" onClick={handleIncrement}>
            <ChevronUp />
          </p>
          <p className="button" id="add10" onClick={handleBiggerIncrement}>
            <ChevronsUp />
          </p>
          <p className="button" id="reset" onClick={handleReset}>
            <RotateCcw />
          </p>
          <p className="button" id="random" onClick={generateRandomNumber}>
            <Hash />
          </p>
          <p className="button" id="minus1" onClick={handleBiggerDecrement}>
            <ChevronsDown />
          </p>
          <p className="button" id="minus10" onClick={handleDecrement}>
            <ChevronDown />
          </p>
        </div>
      </div>
    </main>
  );
};
