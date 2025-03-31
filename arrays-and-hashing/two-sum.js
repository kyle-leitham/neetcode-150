// LeetCode #1
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const lookup = {}

  for (let i = 0; i < nums.length; i++) {
    if (lookup[nums[i]] != null) {
      return [lookup[nums[i]], i]
    }

    lookup[target - nums[i]] = i
  }
}

module.exports = twoSum
