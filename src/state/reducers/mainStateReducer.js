import tickets from '../../json/tickets.json';
import { SET_CURRENCY, SET_SHOW_MODAL, SET_STOPS } from '../actions/';

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
    }
  ],
  stops: [],
  isShowModal: false, 
};

const mainStateReducer = (state = initialState, action) => {
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
      }
    default:
      return state;
  }
};

export default mainStateReducer;
