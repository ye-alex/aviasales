export const getText = value => {
  const id = +value;

  if (id) {
    if (id === 1) {
      return `${id} пересадка`;
    }
    return `${id} пересадки`;
  }
  return 'Без пересадок';
};
