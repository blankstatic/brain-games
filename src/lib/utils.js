const getRndInteger = (max, min = 1) => {
  const value = Math.floor(Math.random() * (max - min)) + min;
  return value;
};

export default getRndInteger;
