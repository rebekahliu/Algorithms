function matrixDiagonal(matrix) {
  let result = [];
  let rowLength = matrix[0].length;

  for (let i = 0; i < rowLength; i++) {
    result = result.concat(matrix[0][i]);

    for (let j = 1; j < matrix.length; j++) {
      if (matrix[j][i - j]) result.push(matrix[j][i - j]);
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    result.push(matrix[row][rowLength - 1]);

    for (let j = 1; j < rowLength; j++) {
      if (matrix[row + j]){
        if (matrix[row + j][rowLength - 1 - j]) {
          result.push(matrix[row + j][rowLength - 1 - j]);
        }
      }
    }
  }

  return result;
}

let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9],
              [10,11,12]];

let matrix1 = [[1,2,3,4,5,6],
              [7,8,9,10,11,12]];

let matrix2 = [[1,2],
               [3,4],
               [5,6],
               [7,8],
               [9,10],
               [11,12]];

let matrix3 = [[3,4,5,6]];

let matrix4 = [[3],
               [4],
               [5]]

console.log(matrixDiagonal(matrix));
console.log(matrixDiagonal(matrix1));
console.log(matrixDiagonal(matrix2));
console.log(matrixDiagonal(matrix3));
console.log(matrixDiagonal(matrix4));
