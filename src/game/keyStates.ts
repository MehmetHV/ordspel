import { evaluateGuess, type LetterState } from './evaluateGuess'

const RANK: Record<LetterState, number> = { absent: 0, present: 1, correct: 2 }

export function getKeyStates(
  guesses: string[],
  answer: string,
): Record<string, LetterState> {
  const states: Record<string, LetterState> = {}

  for (const guess of guesses) {
    const result = evaluateGuess(guess, answer)

    for (const [i, letter] of [...guess.toUpperCase()].entries()) {
      const previous = states[letter]
      if (previous === undefined || RANK[result[i]] > RANK[previous]) {
        states[letter] = result[i]
      }
    }
  }

  return states
}