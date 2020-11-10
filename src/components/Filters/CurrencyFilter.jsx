import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrencyAction } from '../../state/actions/';

const CurrencyFilter = () => {
  const mainState = useSelector(state => state);
  const dispatch = useDispatch();
  const { currencyList, activeCurrency } = mainState;

  const setCurrency = event => {
    const currency = event.target.dataset.currency;
    dispatch(setCurrencyAction(currency));
  };

  return (
    <div className='currency-filter'>
      <h4>Валюта</h4>
      <div className='button-list'>
        {currencyList.map(item => (
          <button
            key={item}
            data-currency={item}
            className={`${activeCurrency === item ? 'active' : ''}`}
            onClick={setCurrency}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyFilter;
