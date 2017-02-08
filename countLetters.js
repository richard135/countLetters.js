
var test = "lighthouse in the house";

function countLetters(str) {
  var counts = {};
  str = str.split(' ').join('');
  for (let i = 0; i < str.length; i++) {
    var char = str[i];
    if (counts[char] === undefined) {
      counts[char] = 0;
    }
    counts[char] += 1;
  }
  return counts;
}

console.log(countLetters(test));