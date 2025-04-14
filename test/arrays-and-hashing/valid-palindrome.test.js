const isPalindrome = require('../../src/arrays-and-hashing/valid-palindrome')

test('case 1', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
})

test('case 2', () => {
  expect(isPalindrome('race a car')).toBe(false)
})

test('case 3', () => {
  expect(isPalindrome(' ')).toBe(true)
})
