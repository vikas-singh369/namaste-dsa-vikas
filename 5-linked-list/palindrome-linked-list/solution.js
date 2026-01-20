//Approach 1. convert and check

var isPalindrome = function (head) {
  let list = [];
  let curr = head;

  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }

  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    if (list[i] != list[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};
