import React from 'react';
import { useSelector } from 'react-redux';
import './monitor.sass';

export default function Monitor() {
  const numbers = useSelector((state) => state.numbers);
  const bills = useSelector((state) => state.bills);
  const leftover = useSelector((state) => state.leftover);
  const withdrawedMoney = useSelector((state) => state.withdrawedMoney);

  return (
    <section className='monitor'>
      <div className='monitor-container'>
        <div className='monitor-container-numbers'>
          Введенная сумма:
          <input
            className='monitor-container-numbers__input'
            value={numbers.length ? numbers : 0}
            readOnly
          />
        </div>

        <div className='monitor-container-info'>
          Состояние купюр:
          {bills.map((bill, i) => (
            <li key={i} className='monitor-container-info__item'>
              <b>{bill.number}</b> ({bill.amount} шт)
            </li>
          ))}
        </div>
      </div>

      <div className='monitor-container'>
        <div className='monitor-container__item'>
          Вы вывели денег на сумму: <b>{withdrawedMoney}</b>
        </div>
        <div className='monitor-container__item'>
          {leftover && (
            <p>
              Остаток от снятия <b>{leftover}</b>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
