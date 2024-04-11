const range = (start, end, step = 1) => {
  const result = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    result.push(i);
  }

  return result;
};

export default range;
