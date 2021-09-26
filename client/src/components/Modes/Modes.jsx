import React, { useState } from 'react';
import './modes.sass';
import { useDispatch } from 'react-redux';
import { setMode } from '../../redux/actions/atmActions';

export default function Modes() {
  const modes = {
    1: [
      { number: 5000, amount: 100 },
      { number: 2000, amount: 400 },
      { number: 1000, amount: 1000 },
      { number: 500, amount: 3000 },
      { number: 200, amount: 5000 },
      { number: 100, amount: 8000 },
      { number: 50, amount: 10000 },
    ],
    2: [
      { number: 5000, amount: 476 },
      { number: 2000, amount: 345 },
      { number: 1000, amount: 6741 },
      { number: 500, amount: 4362 },
      { number: 200, amount: 234 },
      { number: 100, amount: 1643 },
      { number: 50, amount: 3450 },
    ],
    3: [
      { number: 5000, amount: 234 },
      { number: 2000, amount: 678 },
      { number: 1000, amount: 845 },
      { number: 500, amount: 2451 },
      { number: 200, amount: 9654 },
      { number: 100, amount: 2345 },
      { number: 50, amount: 234 },
    ],
    4: [
      { number: 5000, amount: 546 },
      { number: 2000, amount: 562 },
      { number: 1000, amount: 2543 },
      { number: 500, amount: 4365 },
      { number: 200, amount: 2154 },
      { number: 100, amount: 124 },
      { number: 50, amount: 342 },
    ],
    5: [
      { number: 5000, amount: 2732 },
      { number: 2000, amount: 347 },
      { number: 1000, amount: 479 },
      { number: 500, amount: 7556 },
      { number: 200, amount: 3296 },
      { number: 100, amount: 1257 },
      { number: 50, amount: 3854 },
    ],
    6: [
      { number: 5000, amount: 73 },
      { number: 2000, amount: 147 },
      { number: 1000, amount: 279 },
      { number: 500, amount: 356 },
      { number: 200, amount: 696 },
      { number: 100, amount: 857 },
      { number: 50, amount: 854 },
    ],
  };

  const dispatch = useDispatch();
  const [activeMode, setActiveMode] = useState(0);

  const availableModes = Object.values(modes).map((mode, i) => {
    return (
      <button
        key={i}
        className={`modes__btn ${i === activeMode ? 'active' : ''}`}
        onClick={(e) => changeMode(mode, i)}>
        {i + 1} вариант
      </button>
    );
  });

  function changeMode(mode, i) {
    dispatch(setMode(mode));
    localStorage.setItem('mode', i);
    setActiveMode(i);
  }

  return <div className='modes'>{availableModes}</div>;
}
