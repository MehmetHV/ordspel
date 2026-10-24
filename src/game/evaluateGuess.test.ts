import { describe, expect, it } from 'vitest'
import { evaluateGuess } from './evaluateGuess'

describe('evaluateGuess', () => {
  it('marks every letter correct for an exact match', () => {
    expect(evaluateGuess('SKALA', 'SKALA')).toEqual([
      'correct', 'correct', 'correct', 'correct', 'correct',
    ])
  })

  it('marks every letter absent when nothing matches', () => {
    expect(evaluateGuess('BÅTAR', 'SKYLD')).toEqual([
      'absent', 'absent', 'absent', 'absent', 'absent',
    ])
  })

  it('does not over-count repeated letters', () => {
    expect(evaluateGuess('AAAAA', 'SKALA')).toEqual([
      'absent', 'absent', 'correct', 'absent', 'correct',
    ])
  })

  it('marks letters in the wrong spot as present', () => {
    expect(evaluateGuess('RÅTAB', 'BÅTAR')).toEqual([
      'present', 'correct', 'correct', 'correct', 'present',
    ])
  })

  it('does not reuse an answer letter that is already taken', () => {
    expect(evaluateGuess('ALLAS', 'HALLÅ')).toEqual([
      'present', 'present', 'correct', 'absent', 'absent',
    ])
  })

  it('gives exact matches priority over misplaced letters', () => {
    expect(evaluateGuess('AABBB', 'HALLÅ')).toEqual([
      'absent', 'correct', 'absent', 'absent', 'absent',
    ])
  })

  it('treats å, ä and ö as their own letters', () => {
    expect(evaluateGuess('ÄÄÄÄÄ', 'MÄTÅR')).toEqual([
      'absent', 'correct', 'absent', 'absent', 'absent',
    ])
  })

  it('ignores upper and lower case', () => {
    expect(evaluateGuess('skala', 'SKALA')).toEqual([
      'correct', 'correct', 'correct', 'correct', 'correct',
    ])
  })
})