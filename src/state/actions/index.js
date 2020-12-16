export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_STOPS = 'SET_STOPS';
export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
export const GET_INITIAL_STOPS = 'GET_INITIAL_STOPS';
export const FILTER_TICKETS = 'FILTER_TICKETS';

export const setCurrencyAction = currency => {
  return {
    type: SET_CURRENCY,
    currency,
  };
};

export const setStopsAction = (stop, isStopOnly = false) => {
  return {
    type: SET_STOPS,
    id: stop,
    isStopOnly,
  };
};

export const setToggleModalAction = bool => {
  return {
    type: SET_SHOW_MODAL,
    isShow: bool,
  };
};

export const getInitialStops = () => {
  return {
    type: GET_INITIAL_STOPS,
  };
};

export const filterTickets = () => {
  return {
    type: FILTER_TICKETS,
  };
};
