const { encode, decode } = require('../../arrays-and-hashing/encode-and-decode-strings')

test('case 1', () => {
  expect(decode(encode(['one', 'two', 'three']))).toStrictEqual(['one', 'two', 'three'])
})

test('case 2', () => {
  expect(decode(encode(['one', 'two', 'thr#ee']))).toStrictEqual(['one', 'two', 'thr#ee'])
})

test('case 3', () => {
  expect(decode(encode(['o#####n#####e', 'two', 'thr#ee']))).toStrictEqual(['o#####n#####e', 'two', 'thr#ee'])
})
