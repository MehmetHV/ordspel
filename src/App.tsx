import { Board } from './components/Board'
import './App.css'

const demoGuesses = ['SKOLA', 'TAGUS', 'STUGA']

function App() {
  return (
    <main className="app">
      <h1 className="title">ORDSPEL</h1>
      <Board answer="STUGA" guesses={demoGuesses} />
    </main>
  )
}

export default App