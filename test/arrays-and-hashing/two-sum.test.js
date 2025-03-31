const twoSum = require('../../arrays-and-hashing/two-sum')

test('case 1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
})

test('case 2', () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
})

test('case 3', () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1])
})
