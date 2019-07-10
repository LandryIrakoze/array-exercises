/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum(numbers) {
  if (numbers === undefined || numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((total, item) => (total += item));
  }
}

/**
 * @instruction
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */
function doubleNumbers(numbers) {
  return numbers.map(item => item * 2);
}

/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters(chars) {
  return chars
    .split("")
    .map(item => `${item}${item}`)
    .join("");
}

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify(array) {
  if (array === undefined || array.length === 0) {
    return {};
  } else return array.reverse();
}

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave(list1, list2) {
  let mixed = [];

  if (list1.length !== list2.length) {
    return null;
  } else {
    while (list1.length > 0) {
      mixed.push(list1[0]);
      mixed.push(list2[0]);
      list1.shift();
      list2.shift();
    }
  }

  return mixed;
}

/**
 * @instruction
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */
function makeRange(count, fillString) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(fillString);
  }

  return arr;
}

/**
 * @instuction
 * `countByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys. The value should be a Number, with the count of words with same starting character.
 *
 * @example
 *
 * const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
 * countByFirstLetter(input)
 * // will return:
 * // {
 * //  c: 2, // cat + catzilla
 * //  k: 1, // kitty
 * //  f: 1  // fluffykins
 * // }
 */

function countByFirstLetter(words) {
  let obj = {};
  let key;
  let arrholder = words;
  let charHolder;
  let arr1;

  while (arrholder.length > 0) {
    charHolder = arrholder[0].charAt(0);
    arr1 = arrholder.filter(item => item.charAt(0) === charHolder);
    key = charHolder;
    obj[key] = arr1.length;
    arrholder = arrholder.filter(item => !arr1.includes(item));
  }

  return obj;
}

/**
 * @instructions
 * `groupByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys.
 * The key value should be an array with only the words sharing a starting character.
 *
 * @example
 *
 * const input = ['Cat', 'Kitty', 'catzilla', 'fluffykins']
 * const result = groupByFirstLetter(input)
 * // result deep equals:
 * // {
 * //  c: ['cat', 'catzilla'],
 * //  k: ['kitty'],
 * //  f: ['fluffykins']
 * // }
 *
 */

function groupByFirstLetter(words) {
  let obj = {};
  let key;
  let arrholder = words;
  let charHolder;
  let arr1;

  if (words === null || words.length === 0 || typeof words !== "object") {
    return {};
  } else {
    while (arrholder.length > 0) {
      charHolder = arrholder[0].charAt(0);
      arr1 = arrholder.filter(item => item.charAt(0) === charHolder);
      key = charHolder;
      obj[key] = arr1;
      arrholder = arrholder.filter(item => !arr1.includes(item));
    }

    return obj;
  }
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////

if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = {
    sum,
    doubleCharacters,
    doubleNumbers,
    backwardsify,
    interleave,
    makeRange,
    countByFirstLetter,
    groupByFirstLetter
  };
}
