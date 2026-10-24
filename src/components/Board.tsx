import { evaluateGuess } from '../game/evaluateGuess'

const ROWS = 6
const COLS = 5

type BoardProps = {
  answer: string
  guesses: string[]
  current: string
}

export function Board({ answer, guesses, current }: BoardProps) {
  return (
    <div className="board" role="grid" aria-label="Gissningar">
      {Array.from({ length: ROWS }, (_, row) => {
        const guess = guesses[row]
        const states = guess ? evaluateGuess(guess, answer) : []
        const letters = guess ?? (row === guesses.length ? current : '')

        return (
          <div className="row" role="row" key={row}>
            {Array.from({ length: COLS }, (_, col) => (
              <div
                className="tile"
                role="gridcell"
                data-state={states[col] ?? (letters[col] ? 'filled' : 'empty')}
                key={col}
              >
                {letters[col]}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}