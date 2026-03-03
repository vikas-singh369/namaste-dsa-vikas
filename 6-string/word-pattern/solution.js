var wordPattern = function (pattern, s) {
  let words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  let mapCharToWord = new Map();
  let mapWordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (!mapCharToWord.get(char) && !mapWordToChar.get(word)) {
      mapCharToWord.set(char, word);
      mapWordToChar.set(word, char);
    } else if (
      mapCharToWord.get(char) !== word ||
      mapWordToChar.get(word) !== char
    ) {
      return false;
    }
  }
  return true;
};
