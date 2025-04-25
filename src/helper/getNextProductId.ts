export const getNextProductId = () => {
  const lastId = Number(localStorage.getItem('lastId') || '20');
  const newId = lastId + 1;
  localStorage.setItem('lastId', newId.toString());
  return newId;
};
