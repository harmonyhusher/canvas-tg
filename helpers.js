export const computeBoundaries = (data) => {
  let minY = Infinity;
  let maxY = -Infinity;

  for (const [_, y] of data) {
    if (y < minY) {
      minY = y;
    }
    if (y > maxY) {
      maxY = y;
    }
  }

  return [minY, maxY];
};
