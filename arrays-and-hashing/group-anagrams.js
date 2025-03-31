// LeetCode #49
// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramIndexes = {}
  const groupedAnagrams = []

  for (const string of strs) {
    const sortedString = string.split('').sort().join('')

    if (anagramIndexes[sortedString] != null) {
      groupedAnagrams[anagramIndexes[sortedString]].push(string)
    } else {
      anagramIndexes[sortedString] = groupedAnagrams.length
      groupedAnagrams.push([string])
    }
  }

  return groupedAnagrams
}

module.exports = groupAnagrams
