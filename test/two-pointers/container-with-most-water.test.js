const maxArea = require('../../src/two-pointers/container-with-most-water')

test('case 1', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
})

test('case 2', () => {
  expect(maxArea([1, 1])).toBe(1)
})
