const productExceptSelf = require('../../src/arrays-and-hashing/product-of-array-except-self')

test('case 1', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual(expect.arrayContaining([24, 12, 8, 6]))
})

test('case 2', () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual(expect.arrayContaining([0, 0, 9, 0, 0]))
})
