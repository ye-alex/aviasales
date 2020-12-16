/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../../helpers/helper';
import { filterTickets, getInitialStops, setStopsAction } from '../../state/actions';

const StopsFilter = () => {
  const mainState = useSelector(state => state);
  const dispatch = useDispatch();
  const { initialStops } = mainState;

  useEffect(() => {
    dispatch(getInitialStops());
  }, []);

  const setStops = (event, stop) => {
    const { id, checked } = event.target;
    const stopId = stop ? stop : id;

    if (id === 'all') {
      checked ? setChecked() : setChecked(false);
    } else if (stop) { 
      setChecked(false);
      document.getElementById('all').checked = false;
      document.getElementById(stop).checked = true;
    } else {
      document.getElementById('all').checked = false;
    }

    dispatch(setStopsAction(stopId, stop));
    dispatch(filterTickets());
  };

  const setChecked = (value = true) =>
    initialStops.map(item => document.getElementById(item).checked = value);

  return (
    <div className='stops-filter'>
      <h4>Количество пересадок</h4>
      <div>
        <input type='checkbox' id='all' onClick={setStops} />
        <label htmlFor='all'>Все</label>
      </div>
      {initialStops.map(stop => (
        <div key={stop}>
          <input type='checkbox' id={stop} onClick={setStops} />
          <label htmlFor={stop}>{getText(stop)}</label>
          <span onClick={event => setStops(event, stop)}>Tолько</span>
        </div>
      ))}
    </div>
  );
};

export default StopsFilter;
