// LeetCode #49
// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groupedAnagrams = {}

  for (const string of strs) {
    const sortedString = string.split('').sort().join('')

    if (groupedAnagrams[sortedString] != null) {
      groupedAnagrams[sortedString].push(string)
    } else {
      groupedAnagrams[sortedString] = [string]
    }
  }

  return Object.values(groupedAnagrams)
}

module.exports = groupAnagrams
