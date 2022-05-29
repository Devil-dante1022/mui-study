
export const filterItemClick = (filterItems) => {
  return{
    type: 'FILTERITEMCLICK',
    payload: filterItems,
  };
}