/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../../helpers/helper';
import { getInitialStops, setStopsAction } from '../../state/actions';

const StopsFilter = () => {
  const mainState = useSelector(state => state);
  const dispatch = useDispatch();
  const {stops, initialStops } = mainState;

  useEffect(() => {
    dispatch(getInitialStops());
  }, []);

  const setStops = (event, stop) => {
    const { id, checked } = event.target;

    if (id === 'all') {
      if (checked) {
        dispatch(setStopsAction(initialStops));
        setChecked();
      } else {
        dispatch(setStopsAction([]));
        setChecked(false);
      }

      return;
    }

    if (stops.includes(id)) {
      const filteredStops = stops.filter(item => item !== id);

      document.getElementById('all').checked = false;
      dispatch(setStopsAction(filteredStops));

      return;
    }

    if (stop) { 
      setChecked(false);
      document.getElementById('all').checked = false;
      document.getElementById(stop).checked = true;
      dispatch(setStopsAction([stop]));

      return;
    }

    dispatch(setStopsAction([...stops, id]));
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
