var reverseVowels = function (s) {
  // convert to array
  let strArr = s.split("");

  // two pointer
  let i = 0;
  let j = s.length - 1;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  while (i < j) {
    while (i < j && !vowels.includes(strArr[i])) {
      i++;
    }

    while (i < j && !vowels.includes(strArr[j])) {
      j--;
    }

    // swap vowels
    let temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;

    i++;
    j--;
  }

  // return as str
  return strArr.join("");
};
