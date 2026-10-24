import { ANSWERS } from './words'

// Day 0 of the game. Months are 0-indexed, so 9 = October.
const START = Date.UTC(2026, 9, 24)
const MS_PER_DAY = 24 * 60 * 60 * 1000

export function getDailyAnswer(
  date: Date = new Date(),
  answers: readonly string[] = ANSWERS,
): string {
  // Build the day from the player's local date so everyone's word
  // changes at their own midnight, and daylight saving can't shift it.
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  const days = Math.floor((today - START) / MS_PER_DAY)
  const index = ((days % answers.length) + answers.length) % answers.length
  return answers[index]
}