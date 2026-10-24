export type LetterState = 'correct' | 'present' | 'absent'

export function evaluateGuess(guess: string, answer: string): LetterState[] {
  const guessLetters = guess.toUpperCase().split('')
  const answerLetters = answer.toUpperCase().split('')

  const result: LetterState[] = guessLetters.map(() => 'absent')
  const unused: (string | null)[] = [...answerLetters]

  // Pass 1: exact matches
  guessLetters.forEach((letter, i) => {
    if (letter === answerLetters[i]) {
      result[i] = 'correct'
      unused[i] = null
    }
  })

  // Pass 2: right letter, wrong spot (only uses letters not already matched)
  guessLetters.forEach((letter, i) => {
    if (result[i] === 'correct') return
    const found = unused.indexOf(letter)
    if (found !== -1) {
      result[i] = 'present'
      unused[found] = null
    }
  })

  return result
}