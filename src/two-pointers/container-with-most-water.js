// LeetCode #11
// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1

  let area = 0
  while (left < right) {
    const wallHeight = Math.min(height[left], height[right])
    const wallWidth = right - left
    area = Math.max(area, wallHeight * wallWidth)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return area
}
