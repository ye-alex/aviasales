import React from 'react';
import BrandImg from '../../assets/brand.png';
import { getText } from '../../helpers/helper';

const Ticket = ({ ticket, openModal }) => {
  const {
    arrival_date: arrivalDate,
    arrival_time: arrivalTime,
    departure_date: departureDate,
    departure_time: departureTime,
    destination,
    destination_name: destinationName,
    origin,
    origin_name: originName,
    price,
    stops,
    symbol,
  } = ticket;

  const stopsText = !!stops && getText(stops);

  return (
    <div className='ticket-content'>
      <div className='price-info'>
        <img src={BrandImg} alt="brand" />
        <button onClick={openModal}>
          <div>Купить</div>
          за {price} {symbol}
        </button>
      </div>
      <div className='departure-info'>
        <div>
          <div className='time'>{departureTime}</div>
          <div className='name'>
            {origin}, {originName}
          </div>
          <div className='date'>{departureDate}</div>
        </div>
        <div className='stops'>{stopsText}</div>
        <div>
          <div className='time'>{arrivalTime}</div>
          <div className='name'>
            {destinationName}, {destination}
          </div>
          <div className='date'>{arrivalDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
