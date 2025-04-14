const groupAnagrams = require('../../src/arrays-and-hashing/group-anagrams')

test('case 1', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual(
    expect.arrayContaining([
      expect.arrayContaining(['bat']),
      expect.arrayContaining(['nat', 'tan']),
      expect.arrayContaining(['ate', 'eat', 'tea'])
    ])
  )
})

test('case 2', () => {
  expect(groupAnagrams([''])).toStrictEqual([['']])
})

test('case 3', () => {
  expect(groupAnagrams(['a'])).toStrictEqual([['a']])
})
