import tickets from '../../json/tickets.json';

const getStops = () => {
  const stopsList = [];

  tickets.tickets.map(item => {
    const itemToStr = item.stops.toString();

    return !stopsList.includes(itemToStr) && stopsList.push(itemToStr);
  });

  return stopsList.sort();
};

export default getStops;
