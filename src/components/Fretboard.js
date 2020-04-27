import React, { useState } from 'react'
import './css/fretboard.css'

const Fretboard = () => {
  const [overFret, setOverFret] = useState({string: null, fret: null})
  const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
  const STRINGS = ['E', 'B', 'G', 'D', 'A', 'E']

  const currentNote = () => {
    if (!overFret) return null
    const stringIndex= NOTES.indexOf(STRINGS[overFret.string])
    const fretIndex = (stringIndex + overFret.fret) % 12
    return NOTES[fretIndex]
  }

  return (
    <div className="fretboard-wrapper noselect">
      {[0,1,2,3,4,5].map(stringNum => (
        <div className="string">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(fretNum => (
            <div
              onMouseEnter={() => setOverFret({string: stringNum, fret: fretNum})}
              onMouseLeave={() => setOverFret({string: null, fret: null})}
              className={`fret ${fretNum === 0 ? 'base' : null}`}
            >
              {overFret.string === stringNum && overFret.fret === fretNum
                ? <div className="note">
                    <div className="note-text">
                      {currentNote()}
                    </div>
                  </div>
                : null
              }
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Fretboard
