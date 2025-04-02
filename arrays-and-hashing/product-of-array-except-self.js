/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const leftToRight = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    leftToRight.push(nums[i] * leftToRight[leftToRight.length - 1])
  }

  const rightToLeft = [nums[nums.length - 1]]
  for (let i = nums.length - 2; i >= 0; i--) {
    rightToLeft.push(nums[i] * rightToLeft[rightToLeft.length - 1])
  }

  const answer = []
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      answer[i] = rightToLeft[nums.length - 2]
    } else if (i == nums.length - 1) {
      answer[i] = leftToRight[nums.length - 2]
    } else {
      answer[i] = leftToRight[i - 1] * rightToLeft[nums.length - 2 - i]
    }
  }

  return answer
}

module.exports = productExceptSelf
