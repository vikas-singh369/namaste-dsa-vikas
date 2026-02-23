var checkIfPangram = function (sentence) {
  let setMap = new Set();

  for (let i = 0; i < sentence.length; i++) {
    setMap.add(sentence[i]);
  }

  if (setMap.size < 26) {
    return false;
  }
  return true;
};
