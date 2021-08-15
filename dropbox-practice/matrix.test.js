const { meanAndChessboard } = require("./matrix");

it("pass 1st test", () => {
  let matrix = [[1, 9, 10, 8],
                [3, 4, 4, 4]];
  let queries = [[2, 3], [3, 2]];
  let res = meanAndChessboard(matrix, queries);
  expect(res).toEqual([[1, 9, 9, 7],
                       [3, 4, 4, 6]]);
});

it("pass 2nd test", () => {
  let matrix = [[2, 0, 4],
                [2, 8, 5],
                [6, 0, 9],
                [2, 7, 10],
                [4, 3, 4]];
  let queries = [[0, 0], [1, 3]];
  let res = meanAndChessboard(matrix, queries);
  expect(res).toEqual([[1, 2, 4],
                      [2, 8, 5],
                      [6, 0, 9],
                      [2, 7, 10],
                      [4, 3, 3]]);
});
