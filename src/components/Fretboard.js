import React from 'react'
import './css/fretboard.css'

const Fretboard = () => {
  return (
    <div className="fretboard-wrapper">
      {[1,2,3,4,5,6].map(stringNum => (
        <div className="string">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(fretNum => (
            <div className={`fret ${fretNum === 0 ? 'base' : null}`}></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Fretboard
