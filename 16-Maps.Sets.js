
1

//1,2,3,4

2
// ref

3


0: {Array(3) => true}
1: {Array(3) => false}

4

function hasDuplicate(arr) {
  const set = new Set(arr);
  return set.size !== arr.length;
}

5

function vowelCount(str) {
  const vowels = 'aeiou';
  const countMap = new Map();

  for (let char of str) {
    const lowerChar = char.toLowerCase();
    if (vowels.includes(lowerChar)) {
      countMap.set(lowerChar, (countMap.get(lowerChar) || 0) + 1);
    }
  }

  return countMap;
}

