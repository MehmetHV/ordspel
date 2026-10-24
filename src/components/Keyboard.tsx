import type { LetterState } from '../game/evaluateGuess'

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Å'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
]

type KeyboardProps = {
  keyStates: Record<string, LetterState>
  onLetter: (letter: string) => void
  onEnter: () => void
  onBackspace: () => void
}

export function Keyboard({
  keyStates,
  onLetter,
  onEnter,
  onBackspace,
}: KeyboardProps) {
  function press(key: string) {
    if (key === 'ENTER') onEnter()
    else if (key === 'BACKSPACE') onBackspace()
    else onLetter(key)
  }

  return (
    <div className="keyboard" aria-label="Tangentbord">
      {ROWS.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {row.map((key) => {
            const isAction = key === 'ENTER' || key === 'BACKSPACE'

            return (
              <button
                type="button"
                key={key}
                className={isAction ? 'key key-wide' : 'key'}
                data-state={keyStates[key] ?? 'unused'}
                aria-label={
                  key === 'BACKSPACE' ? 'Ta bort' : key === 'ENTER' ? 'Skicka' : key
                }
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => press(key)}
              >
                {key === 'BACKSPACE' ? '⌫' : key}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}