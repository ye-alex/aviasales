import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../../helpers/helper';
import { setStopsAction } from '../../state/actions';

const StopsFilter = () => {
  const initialStops = useSelector(state => state.stops);
  const stops = useSelector(state => state.mainState.stops);
  const dispatch = useDispatch();

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
