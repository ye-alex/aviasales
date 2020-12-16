import ticketsList from '../../json/tickets.json';
import {
  SET_CURRENCY,
  SET_SHOW_MODAL,
  SET_STOPS,
  GET_INITIAL_STOPS,
  FILTER_TICKETS,
} from '../actions/';

const sortedTickets = ticketsList.tickets.sort((a, b) => a.stops - b.stops);

const initialState = {
  tickets: sortedTickets,
  currencyList: ['RUB', 'USD', 'EUR'],
  activeCurrency: 'RUB',
  currencyData: [
    {
      value: 'RUB',
      symbol: '₽',
      rate: 1,
    },
    {
      value: 'USD',
      symbol: '$',
      rate: 79.23,
    },
    {
      value: 'EUR',
      symbol: '€',
      rate: 92.97,
    },
  ],
  stops: [],
  initialStops: [],
  isShowModal: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TICKETS:
      const currency = state.currencyData.filter(item => item.value.includes(state.activeCurrency));
      const updatedTickets = sortedTickets.map(item => {
        const convertedPrice = Math.round(item.price / currency[0].rate);

        return {
          ...item,
          price: convertedPrice,
          symbol: currency[0].symbol,
        };
      });

      if (state.stops.length && !state.stops.includes('all')) {
        const filteredTickets = updatedTickets.filter(ticket => state.stops.includes(String(ticket.stops)));
  
        return {
          ...state,
          tickets: filteredTickets,
        };
      }

      return {
        ...state,
        stops: [],
        tickets: updatedTickets,
      };
    case SET_STOPS:
      if (state.stops.includes(action.id) && !action.isStopOnly) {
        const newArr = [...state.stops];
        const index = state.stops.indexOf(action.id);
        newArr.splice(index, 1);

        return {
          ...state,
          stops: newArr,
        };
      }

      if (action.isStopOnly) {
        return {
          ...state,
          stops: [action.id],
        }
      }

      return {
        ...state,
        stops: [...state.stops, action.id],
      };
    case SET_CURRENCY:
      return {
        ...state,
        activeCurrency: action.currency,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        isShowModal: action.isShow,
      };
    case GET_INITIAL_STOPS:
      const stopsList = [];

      ticketsList.tickets.forEach(item => {
        const itemToStr = item.stops.toString();

        !stopsList.includes(itemToStr) && stopsList.push(itemToStr);
      });

      stopsList.sort();

      return {
        ...state,
        initialStops: stopsList,
      };
    default:
      return state;
  }
};

export default rootReducer;
