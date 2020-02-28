module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  let resultArr = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      resultArr = resultArr.concat(matrix[i].reverse());
    } else {
      resultArr = resultArr.concat(matrix[i]);
    }
  }

  return resultArr;
}
