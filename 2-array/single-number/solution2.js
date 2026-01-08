// 2 optimal Approach
var singleNumber = function (nums) {
  let single = 0;

  for (const value of nums) {
    single = single ^ value;
  }

  return single;
};
