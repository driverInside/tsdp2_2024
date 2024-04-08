const coordinates = require('./coordinates');

const list = [
  [5, 2], // 1
  [-3, 9],
  [-1, -1], // 3
  [5, -3],
  [0, 1],
  [-8, -6],  // 3
];

describe('Coordinates', () => {
  it('should be defined', () => {
    expect(coordinates).toBeDefined();
  });
  it('should return an empty array', () => {
    expect(coordinates([])).toStrictEqual([]);
  });
  it('should return an array with two elements', () => {
    expect(coordinates(list)).toHaveLength(3);
  });
});
