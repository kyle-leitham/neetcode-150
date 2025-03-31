/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const lettersCount = {}

  for (let i = 0; i < s.length; i++) {
    if (lettersCount[s[i]]) {
      lettersCount[s[i]]++
    } else {
      lettersCount[s[i]] = 1
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!lettersCount[t[i]]) {
      return false
    }

    lettersCount[t[i]]--
  }

  return Object.values(lettersCount).every((value) => value == 0)
}

module.exports = isAnagram
