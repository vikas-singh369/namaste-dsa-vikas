function decodeSecretCode(s) {
  if (!s || !s.length || s.length % 2 !== 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < s.length; i = i + 2) {
    if (s[i] >= "a" && s[i] <= "z") {
      let char = s[i];
      let shift = parseInt(s[i + 1]);

      const newCode = char.charCodeAt(0) + shift;

      result = result + String.fromCharCode(newCode);
    }
  }

  return result;
}
