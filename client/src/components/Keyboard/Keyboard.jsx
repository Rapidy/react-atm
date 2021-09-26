import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  inputNumber,
  clearInput,
  withdraw,
  removeNumber,
} from '../../redux/actions/atmActions';
import './keyboard.sass';

export default function Keyboard() {
  const dispatch = useDispatch();

  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  function addNumber(e) {
    dispatch(inputNumber(e.target.innerText));
  }

  function clearNumbers() {
    dispatch(clearInput());
  }

  function withdrawMoney() {
    dispatch(withdraw());
    dispatch(clearInput());
  }

  function deleteNumber() {
    dispatch(removeNumber());
  }

  useEffect(() => {
    document.body.addEventListener('keypress', function (e) {
      if (digits.includes(e.key)) {
        dispatch(inputNumber(e.key));
      } else if (e.key === 'Enter' || e.key === 'NumpadEnter') {
        withdrawMoney();
      } else {
        return false;
      }
    });
  }, []);

  return (
    <section className='keyboard'>
      <div className='keyboard-digits'>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          1
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          2
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          3
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          4
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          5
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          6
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          7
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          8
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          9
        </button>
        <button
          onClick={addNumber}
          className='keyboard__btn keyboard-digits__btn'
          disabled>
          –
        </button>
        <button onClick={addNumber} className='keyboard__btn keyboard-digits__btn'>
          0
        </button>
        <button className='keyboard__btn keyboard-digits__btn' disabled>
          +
        </button>
      </div>

      <div className='keyboard-functions'>
        <button onClick={clearNumbers} className='keyboard__btn keyboard-functions__btn'>
          <span></span>Очистить
        </button>
        <button onClick={deleteNumber} className='keyboard__btn keyboard-functions__btn'>
          <span></span>Стереть
        </button>
        <button onClick={withdrawMoney} className='keyboard__btn keyboard-functions__btn'>
          <span></span>Выдача
        </button>
      </div>
    </section>
  );
}
