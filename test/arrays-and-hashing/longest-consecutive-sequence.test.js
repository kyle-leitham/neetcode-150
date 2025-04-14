const longestConsecutive = require('../../src/arrays-and-hashing/longest-consecutive-sequence')

test('case 1', () => {
  expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4)
})

test('case 2', () => {
  expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9)
})

test('case 3', () => {
  expect(longestConsecutive([1, 0, 1, 2])).toBe(3)
})
