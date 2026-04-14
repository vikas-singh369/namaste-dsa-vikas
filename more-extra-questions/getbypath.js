function getResultByPath(path, obj) {
  let keys = [];
  let temp = "";

  for (let char of path) {
    if (char === "." || char === "[" || char === "]") {
      if (temp) {
        keys.push(temp);
        temp = "";
      }
    } else {
      temp += char;
    }
  }

  if (temp) {
    keys.push(temp);
    temp = "";
  }

  let curr = obj;

  for (let key of keys) {
    if (curr == null) return curr;

    curr = curr[key];
  }

  return curr;
}
const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};
getResultByPath(path, obj);
