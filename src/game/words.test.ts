import { describe, expect, it } from 'vitest'
import { getDailyAnswer } from './dailyWord'
import { ANSWERS, isValidGuess } from './words'

describe('word list', () => {
  it('only contains 5-letter uppercase words', () => {
    for (const word of ANSWERS) {
      expect([...word]).toHaveLength(5)
      expect(word).toBe(word.toUpperCase())
    }
  })

  it('has no duplicates', () => {
    expect(new Set(ANSWERS).size).toBe(ANSWERS.length)
  })

  it('accepts a known word in any case and rejects an unknown one', () => {
    expect(isValidGuess('skola')).toBe(true)
    expect(isValidGuess('XXXXX')).toBe(false)
  })
})

describe('getDailyAnswer', () => {
  it('returns the same word for the same day', () => {
    const morning = new Date(2026, 9, 30, 6, 0)
    const night = new Date(2026, 9, 30, 23, 59)
    expect(getDailyAnswer(morning)).toBe(getDailyAnswer(night))
  })

  it('returns a different word on the next day', () => {
    const today = new Date(2026, 9, 30)
    const tomorrow = new Date(2026, 9, 31)
    expect(getDailyAnswer(today)).not.toBe(getDailyAnswer(tomorrow))
  })

  it('starts the cycle again after the last word', () => {
    const first = new Date(2026, 9, 24)
    const afterCycle = new Date(2026, 9, 24 + ANSWERS.length)
    expect(getDailyAnswer(afterCycle)).toBe(getDailyAnswer(first))
  })

  it('still returns a valid word for dates before the start', () => {
    const early = new Date(2026, 0, 1)
    expect(ANSWERS).toContain(getDailyAnswer(early))
  })
})