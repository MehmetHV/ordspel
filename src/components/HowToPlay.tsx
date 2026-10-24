export function HowToPlay() {
  return (
    <details className="howto">
      <summary>Så spelar du</summary>
      <div className="howto-body">
        <p>
          Gissa dagens ord på sex försök. Varje gissning ska vara ett riktigt
          svenskt ord med fem bokstäver. Skriv med tangentbordet och tryck
          Enter.
        </p>
        <p>Efter varje gissning byter rutorna färg:</p>

        <ul className="howto-examples">
          <li>
            <div className="tile" data-state="correct">S</div>
            <span>Rätt bokstav på rätt plats.</span>
          </li>
          <li>
            <div className="tile" data-state="present">O</div>
            <span>Bokstaven finns i ordet, men på fel plats.</span>
          </li>
          <li>
            <div className="tile" data-state="absent">N</div>
            <span>Bokstaven finns inte i ordet.</span>
          </li>
        </ul>

        <p>
          Å, Ä och Ö räknas som egna bokstäver. Det kommer ett nytt ord varje
          dag.
        </p>
      </div>
    </details>
  )
}