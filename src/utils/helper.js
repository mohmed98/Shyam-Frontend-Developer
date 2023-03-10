export const convertObjectToQuerystring = (object) => {
  return new URLSearchParams(object).toString();
};

export const chunk = (array, size) => {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...chunk(tail, size)];
};

export const getDate = (date) => {
  const dateObj = new Date(date);
  return `${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getFullYear()}`;
};
