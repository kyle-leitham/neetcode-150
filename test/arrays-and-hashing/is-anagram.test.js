const isAnagram = require('../../arrays-and-hashing/is-anagram')

test('case 1', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true)
})

test('case 2', () => {
  expect(isAnagram('rat', 'car')).toBe(false)
})
