// LeetCode 271
// LintCode 659
// https://www.lintcode.com/problem/659/

/**
 * @param {string[]} strings
 * @return {string}
 */
var encode = function (strings) {
  let encoded = ''

  for (string of strings) {
    encoded += `${string.length}#${string}`
  }

  return encoded
}

/**
 * @param {string} string
 * @return {string[]}
 */
var decode = function (string) {
  const decoded = []

  let i = 0
  while (i < string.length) {
    let wordLength = ''
    while (string[i] !== '#') {
      wordLength += string[i]
      i++
    }
    i++

    let word = ''
    const wordEnd = i + parseInt(wordLength)
    while (i < wordEnd) {
      word += string[i]
      i++
    }

    decoded.push(word)
  }

  return decoded
}

module.exports = {
  encode,
  decode
}
