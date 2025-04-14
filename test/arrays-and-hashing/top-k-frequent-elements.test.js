const topKFrequent = require('../../src/arrays-and-hashing/top-k-frequent-elements')

test('case 1', () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2])
})

test('case 2', () => {
  expect(topKFrequent([1], 1)).toStrictEqual([1])
})
