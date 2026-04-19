export const formatTime = (date = new Date()) => {
  return new Date(date).toLocaleTimeString();
};

export const formatMessage = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const truncate = (text, length = 40) => {
  if (!text) return "";
  return text.length > length ? text.slice(0, length) + "..." : text;
};