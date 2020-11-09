export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_STOPS = 'SET_STOPS';
export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';

export const setCurrencyAction = currency => {
    return {
        type: SET_CURRENCY,
        payload: currency,
    }
}

export const setStopsAction = stop => {
    return {
        type: SET_STOPS,
        payload: stop,
    }
}

export const setToggleModalAction = bool => {
    return {
        type: SET_SHOW_MODAL,
        payload: bool,
    }
}
