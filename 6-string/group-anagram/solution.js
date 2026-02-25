var groupAnagrams = function (strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");

    if (!map[key]) {
      map[key] = [strs[i]];
    } else {
      map[key].push(strs[i]);
    }
  }

  // return the values
  return Object.values(map);
};
