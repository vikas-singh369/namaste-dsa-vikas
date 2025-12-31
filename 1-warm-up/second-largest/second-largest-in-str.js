var secondHighest = function (s) {
    let digits = [];

    for (let char of s) {
        if (!isNaN(char) && char != " ") {
            digits.push(Number(char));
        }
    }

    if (digits.length < 2) return -1;

    let first = -Infinity, second = -Infinity;

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] > first) {
            second = first;
            first = digits[i];
        } else if (digits[i] > second && digits[i] != first) {
            second = digits[i];
        }
    }

    return second === -Infinity ? -1 : second

};