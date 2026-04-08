function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  let s2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  if (s1.length !== s2.length) return false;

  let map = {};

  for (let char of s1) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!map[char]) return false;
    map[char]--;
  }

  return true;
}
