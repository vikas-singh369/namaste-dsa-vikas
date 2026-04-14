var orangesRotting = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let queue = [];
  let maxMin = 0;

  // add all rotten in qeues
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  // add all adjecent

  while (queue.length) {
    let [x, y, mintue] = queue.shift();

    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, mintue + 1]);
    }

    if (x < row - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, mintue + 1]);
    }

    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, mintue + 1]);
    }
    if (y < col - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, mintue + 1]);
    }

    maxMin = Math.max(mintue, maxMin);
  }

  // final check if any fresh orange remaining
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxMin;
};
