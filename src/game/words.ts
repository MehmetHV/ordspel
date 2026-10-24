export const ANSWERS: readonly string[] = [
  'SKOLA', 'ÄPPLE', 'BÅTEN', 'STUGA', 'MÅNEN',
  'SOLEN', 'HUSET', 'GATAN', 'FISKA', 'LAMPA',
  'BILEN', 'TÅGET', 'VÄGEN', 'KRAFT', 'SVART',
  'GLASS', 'MJÖLK', 'FRUKT', 'VÅREN', 'REGNA',
  'ORDEN', 'BOKEN', 'PENNA', 'POJKE', 'MAMMA',
  'ÄLVEN', 'ÖPPNA', 'SPELA', 'VINNA', 'KVÄLL',
  'HAVET', 'HJÄLP', 'TRÄNA', 'SPRÅK', 'FRÅGA',
  'SVARA', 'DANSA', 'VÄRLD',
]

// For now every answer is also a valid guess.
// Later this should become a much bigger list of real Swedish 5-letter words.
const VALID_GUESSES: ReadonlySet<string> = new Set(ANSWERS)

export function isValidGuess(word: string): boolean {
  return VALID_GUESSES.has(word.toUpperCase())
}