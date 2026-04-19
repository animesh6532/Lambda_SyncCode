export const generateRoomId = () => {
  return Math.random().toString(36).substring(2, 8);
};

export const debounce = (func, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export const uniqueArray = (arr) => {
  return [...new Set(arr)];
};