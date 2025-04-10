/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = {}
  const columns = {}
  const sections = {}
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == '.') {
        continue
      }

      if (rows[i] == null) {
        rows[i] = new Set()
      }

      if (rows[i].has(board[i][j])) {
        return false
      } else {
        rows[i].add(board[i][j])
      }

      if (columns[j] == null) {
        columns[j] = new Set()
      }

      if (columns[j].has(board[i][j])) {
        return false
      } else {
        columns[j].add(board[i][j])
      }

      const section = getSection(parseInt(i), parseInt(j))
      if (sections[section] == null) {
        sections[section] = new Set()
      }

      if (sections[section].has(board[i][j])) {
        return false
      } else {
        sections[section].add(board[i][j])
      }
    }
  }

  return true
}

const sectionNumbers = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]
var getSection = function (i, j) {
  return sectionNumbers[Math.floor(i / 3)][Math.floor(j / 3)]
}

module.exports = isValidSudoku
