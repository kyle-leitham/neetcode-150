const threeSum = require('../../src/two-pointers/three-sum')

test('case 1', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1]
  ])
})

test('case 2', () => {
  expect(threeSum([0, 1, 1])).toStrictEqual([])
})

test('case 3', () => {
  expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]])
})

test('case 4', () => {
  expect(threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])).toStrictEqual([
    [-10, 5, 5],
    [-5, 0, 5],
    [-4, 2, 2],
    [-3, -2, 5],
    [-3, 1, 2],
    [-2, 0, 2]
  ])
})
