export const getCurrentTimestamp = () => {
  return Math.floor(Date.now());
};

export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const dateMinutes = date.getMinutes();
  const minutes = dateMinutes < 10 ? `0${dateMinutes}` : dateMinutes;

  return `${date.toDateString()} ${date.getHours()}:${minutes}`;
};

/**
 * @returns Timestamp one day before current time
 */

export const getDayBefore = () => {
  const oneDayMilliseconds = 24 * 60 * 60 * 1000;
  const oneDayAgo = new Date(Date.now() - oneDayMilliseconds);

  return Math.floor(oneDayAgo.getTime());
};

/**
 * @returns Timestamp one hour before current time
 */

export const getOneHourBefore = () => {
  const oneHourMilliseconds = 60 * 60 * 1000;
  const oneHourAgo = new Date(Date.now() - oneHourMilliseconds);

  return Math.floor(oneHourAgo.getTime());
};
