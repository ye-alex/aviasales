import tickets from '../../json/tickets.json';
import {
  SET_CURRENCY,
  SET_SHOW_MODAL,
  SET_STOPS,
  GET_INITIAL_STOPS,
} from '../actions/';

const initialState = {
  ...tickets,
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
    case SET_STOPS:
      return {
        ...state,
        stops: action.payload,
      };
    case SET_CURRENCY:
      return {
        ...state,
        activeCurrency: action.payload,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        isShowModal: action.payload,
      };
    case GET_INITIAL_STOPS:
      const stopsList = [];

      tickets.tickets.map(item => {
        const itemToStr = item.stops.toString();

        return !stopsList.includes(itemToStr) && stopsList.push(itemToStr);
      });

      return {
        ...state,
        initialStops: stopsList.sort(),
      };
    default:
      return state;
  }
};

export default rootReducer;
