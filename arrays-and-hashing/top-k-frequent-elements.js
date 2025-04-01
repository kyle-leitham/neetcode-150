// LeetCode #347
// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numCount = {}
  const frequency = []
  for (i = 0; i <= nums.length; i++) {
    frequency[i] = []
  }

  for (const num of nums) {
    if (numCount[num] == null) {
      numCount[num] = 1
    } else {
      numCount[num]++
    }
  }

  for (const num in numCount) {
    frequency[numCount[num]].push(parseInt(num))
  }

  const topK = []
  for (let i = frequency.length - 1; i >= 0; i--) {
    for (const num of frequency[i]) {
      topK.push(num)
      if (topK.length == k) {
        return topK
      }
    }
  }

  return topK
}

module.exports = topKFrequent
