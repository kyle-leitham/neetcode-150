/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums = new Set(nums)

  let longest = 0
  nums.forEach((num) => {
    if (!nums.has(num - 1)) {
      let length = 1
      while (nums.has(num + length)) {
        length++
      }

      longest = Math.max(longest, length)
    }
  })

  return longest
}

module.exports = longestConsecutive
