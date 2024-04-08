module.exports = function coordinates(arr) {
  if (arr.length === 0) {
    return [];
  }

  // const result = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (
  //     (arr[i][0] > 0 && arr[i][1] > 0) ||           // 1er cuadrante
  //     (arr[i][0] < 0 && arr[i][1] < 0)              // 2do cuadrante
  //   ) {
  //     result.push(arr[i]);
  //   }
  // }

  // arr.forEach((coordinate) => {
  //   if (
  //     (coordinate[0] > 0 && coordinate[1] > 0) ||
  //     (coordinate[0] < 0 && coordinate[1] < 0)
  //   ) {
  //     result.push(coordinate);
  //   }
  // });

  return arr.filter((coordinate) => {
    return (coordinate[0] > 0 && coordinate[1] > 0) ||
    (coordinate[0] < 0 && coordinate[1] < 0)
  });
};
