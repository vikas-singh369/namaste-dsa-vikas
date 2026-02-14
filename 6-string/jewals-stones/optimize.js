var numJewelsInStones = function (jewels, stones) {
  // hash store
  let jewelsTable = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jewelsTable.add(jewels[i]);
  }

  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewelsTable.has(stones[i])) {
      count++;
    }
  }

  return count;
};
