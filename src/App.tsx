import { Board } from './components/Board'
import { HowToPlay } from './components/HowToPlay'
import { Keyboard } from './components/Keyboard'
import { getKeyStates } from './game/keyStates'
import { useGame } from './game/useGame'
import './App.css'

function App() {
  const {
    answer,
    guesses,
    current,
    message,
    status,
    typeLetter,
    backspace,
    submit,
  } = useGame()

  return (
    <main className="app">
      <h1 className="title">ORDSPEL</h1>
      <HowToPlay />
      <Board answer={answer} guesses={guesses} current={current} />
      <p className="message" role="status">
        {status === 'won' && 'Rätt! Bra jobbat.'}
        {status === 'lost' && `Ordet var ${answer}`}
        {status === 'playing' && message}
      </p>
      <Keyboard
        keyStates={getKeyStates(guesses, answer)}
        onLetter={typeLetter}
        onEnter={submit}
        onBackspace={backspace}
      />
      <footer className="footer">
        <p>
          Skapad av{' '}
          <a href="https://github.com/MehmetHV">Mehmet Koyuncu</a>
        </p>
        <p className="footer-credit">
          Ordlista: SALDO, Språkbanken Text, Göteborgs universitet (CC BY 4.0)
        </p>
      </footer>
    </main>
  )
}

export default App