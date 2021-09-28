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

  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function addNumber(item) {
    dispatch(inputNumber(item));
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
        {digits.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => addNumber(item)}
              className='keyboard__btn keyboard-digits__btn'>
              {item}
            </button>
          );
        })}
      </div>

      <div className='keyboard-functions'>
        <button
          onClick={clearNumbers}
          className='keyboard__btn keyboard-functions__btn keyboard-functions__btn--clear'>
          <span></span>Очистить
        </button>
        <button
          onClick={deleteNumber}
          className='keyboard__btn keyboard-functions__btn keyboard-functions__btn--erase'>
          <span></span>Стереть
        </button>
        <button
          onClick={withdrawMoney}
          className='keyboard__btn keyboard-functions__btn keyboard-functions__btn--withdraw'>
          <span></span>Выдача
        </button>
      </div>
    </section>
  );
}
