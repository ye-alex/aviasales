import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleModalAction } from '../../state/actions';
import Ticket from '../Ticket/';

const TicketsList = () => {
  const mainState = useSelector(state => state.mainState);
  const dispatch = useDispatch();
  const { stops, tickets, currencyData, activeCurrency } = mainState;

  useEffect(() => {
    updatePriceAndSort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCurrency]);

  const getActiveCurrency = () => {
    return currencyData.filter(item => item.value === activeCurrency)[0];
  };

  const updatePriceAndSort = () => {
    const sortedTickets = tickets.sort((a, b) => a.stops - b.stops);
    const currency = getActiveCurrency();
    const updatedTickets = sortedTickets.map(item => {
      const convertedPrice = Math.round(item.price / currency.rate);
      return {
        ...item,
        price: convertedPrice,
        symbol: currency.symbol,
      };
    });

    const filteredTickets = stops.length
      ? updatedTickets.filter(item => {
          const stopsToStr = item.stops.toString();
          return stops.includes(stopsToStr);
        })
      : updatedTickets;

    return filteredTickets;
  };

  const openModal = () => {
    document.body.classList.add('open-modal');
    dispatch(setToggleModalAction(true));
  };

  return (
    <div className='tickets-list'>
      {updatePriceAndSort().map((item, key) => (
        <Ticket
          ticket={item}
          key={item.carrier + key}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default TicketsList;
