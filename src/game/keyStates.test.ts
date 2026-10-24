import { describe, expect, it } from 'vitest'
import { getKeyStates } from './keyStates'

describe('getKeyStates', () => {
  it('returns nothing before any guess', () => {
    expect(getKeyStates([], 'STUGA')).toEqual({})
  })

  it('marks letters absent when they are not in the answer', () => {
    expect(getKeyStates(['SKOLA'], 'STUGA').K).toBe('absent')
  })

  it('keeps the best state for a letter, whatever the order', () => {
    expect(getKeyStates(['TAGUS', 'STUGA'], 'STUGA').S).toBe('correct')
    expect(getKeyStates(['STUGA', 'TAGUS'], 'STUGA').S).toBe('correct')
  })

  it('does not downgrade a letter that is repeated in a guess', () => {
    expect(getKeyStates(['AAAAA'], 'SKALA').A).toBe('correct')
  })
})