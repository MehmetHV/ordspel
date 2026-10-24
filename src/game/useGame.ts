import { useCallback, useEffect, useState } from 'react'
import { getDailyAnswer } from './dailyWord'
import { isValidGuess } from './words'

const MAX_GUESSES = 6
const WORD_LENGTH = 5
const LETTER = /^[A-ZÅÄÖ]$/

export type GameStatus = 'playing' | 'won' | 'lost'

export function useGame() {
  const [answer] = useState(() => getDailyAnswer())
  const [guesses, setGuesses] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [message, setMessage] = useState('')

  const status: GameStatus = guesses.includes(answer)
    ? 'won'
    : guesses.length >= MAX_GUESSES
      ? 'lost'
      : 'playing'

  const typeLetter = useCallback(
    (letter: string) => {
      if (status !== 'playing') return
      setCurrent((c) => (c.length < WORD_LENGTH ? c + letter : c))
      setMessage('')
    },
    [status],
  )

  const backspace = useCallback(() => {
    if (status !== 'playing') return
    setCurrent((c) => c.slice(0, -1))
    setMessage('')
  }, [status])

  const submit = useCallback(() => {
    if (status !== 'playing') return
    if (current.length < WORD_LENGTH) {
      setMessage('För kort')
    } else if (!isValidGuess(current)) {
      setMessage('Ordet finns inte i listan')
    } else {
      setGuesses((g) => [...g, current])
      setCurrent('')
      setMessage('')
    }
  }, [status, current])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey) return
      const key = event.key.toUpperCase()

      if (key === 'BACKSPACE') backspace()
      else if (key === 'ENTER') submit()
      else if (LETTER.test(key)) typeLetter(key)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [typeLetter, backspace, submit])

  return { answer, guesses, current, message, status, typeLetter, backspace, submit }
}