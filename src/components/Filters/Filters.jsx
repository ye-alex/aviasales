import React from 'react';
import StopsFilter from './StopsFilter';
import CurrencyFilter from './CurrencyFilter';

const Filters = () => {
  return (
    <div className="filters">
      <CurrencyFilter />
      <StopsFilter />
    </div>  
  );
}

export default Filters;
