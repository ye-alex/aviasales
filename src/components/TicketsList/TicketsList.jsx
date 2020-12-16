import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleModalAction } from '../../state/actions';
import Ticket from '../Ticket/';

const TicketsList = () => {
  const mainState = useSelector(state => state);
  const dispatch = useDispatch();
  const { tickets, currencyData } = mainState;

  const openModal = () => {
    document.body.classList.add('open-modal');
    dispatch(setToggleModalAction(true));
  };

  return (
    <div className='tickets-list'>
      {tickets.map((item, key) => (
        <Ticket
          ticket={item}
          key={item.carrier + key}
          openModal={openModal}
          currencyData={currencyData}
        />
      ))}
    </div>
  );
};

export default TicketsList;
