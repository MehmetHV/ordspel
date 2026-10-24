import { VALID_GUESS_LIST } from './validGuesses'

// Curated answers: common, fair words. Add to this list over time.
export const ANSWERS: readonly string[] = [
  'SKOLA', 'STUGA', 'LAMPA', 'MAMMA', 'PAPPA', 'FRUKT', 'GLASS', 'MJÖLK',
  'KRAFT', 'VÄRLD', 'KVÄLL', 'SPRÅK', 'FRÅGA', 'SVARA', 'TRÄNA', 'HJÄLP',
  'FÅGEL', 'KANIN', 'BJÖRN', 'GÄDDA', 'TIGER', 'ZEBRA', 'KRÅKA', 'UGGLA',
  'LEJON', 'FJÄLL', 'REGNA', 'KROPP', 'HUVUD', 'PANNA', 'TUMME', 'SOFFA',
  'MATTA', 'HYLLA', 'PASTA', 'SOPPA', 'TÅRTA', 'BULLE', 'GODIS', 'MORÖT',
  'PÄRON', 'BANAN', 'ÄPPLE', 'KAFFE', 'JACKA', 'MÖSSA', 'VÄSKA', 'KRAGE',
  'BÄLTE', 'TRÖJA', 'CYKEL', 'SKEPP', 'MOTOR', 'VECKA', 'MÅNAD', 'MINUT',
  'TIMME', 'LYCKA', 'MINNE', 'TANKE', 'SKATT', 'VÄRDE', 'KLASS', 'POJKE',
  'SPELA', 'VINNA', 'DANSA', 'ÖPPNA', 'HOPPA', 'SIMMA', 'CYKLA', 'ÄLSKA',
  'STEKA', 'STÄDA', 'HÄMTA', 'KASTA', 'FÅNGA', 'BYGGA', 'BRYTA', 'DRAGA',
  'FLYGA', 'VISKA', 'TÄNKA', 'KÄNNA', 'VÄNTA', 'HITTA', 'SÄLJA', 'GÖMMA',
  'BLIVA', 'FINNA', 'PRATA', 'TITTA', 'SMAKA', 'LUKTA', 'FRYSA', 'GRÅTA',
  'SKÖTA', 'SLUTA', 'BÖRJA', 'ÄNDRA', 'FISKA', 'SVART', 'STARK', 'SNABB',
  'TJOCK', 'FRISK', 'MODIG', 'SNÄLL', 'SNYGG', 'FÄRSK', 'SKARP', 'SLÄTT',
  'TRÖTT', 'MUSIK', 'KONST', 'RADIO', 'DATOR', 'SKÄRM', 'MOBIL', 'KABEL',
  'STRÖM', 'KARTA', 'BLIXT', 'STORM', 'FROST', 'DIMMA', 'KYRKA', 'SLOTT',
  'BUTIK', 'PLATS', 'MATCH', 'SPORT', 'PENNA', 'TAVLA',
]

// Every answer is also a valid guess, even if the big list misses it.
const VALID_GUESSES: ReadonlySet<string> = new Set([
  ...VALID_GUESS_LIST.split(' '),
  ...ANSWERS,
])

export function isValidGuess(word: string): boolean {
  return VALID_GUESSES.has(word.toUpperCase())
}