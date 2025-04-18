// LeetCode #217
// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numSet = new Set()

  for (const num of nums) {
    if (numSet.has(num)) {
      return true
    }

    numSet.add(num)
  }

  return false
}

module.exports = containsDuplicate
