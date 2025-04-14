const twoSum = require('../../src/two-pointers/two-sum-input-sorted')

test('case 1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
})

test('case 2', () => {
  expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3])
})

test('case 3', () => {
  expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2])
})
