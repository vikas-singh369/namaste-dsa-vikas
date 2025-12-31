// question
const arr = ["apple", "banana", "mango", "kiwi"];

function secondLargest(arr) {
  if (arr.length < 2) return "Array should have at least two strings";

  let first = "",
    second = "";

  for (let str of arr) {
    if (str.length > first.length) {
      second = first;
      first = str;
    } else if (str.length > second && str.length != first.length) {
      second = str;
    }
  }

  return second === "" ? "No second largest exist" : second;
}

console.log(secondLargest(arr));
