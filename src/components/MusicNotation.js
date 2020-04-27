import React, { useRef, useEffect } from 'react'
import Vex from 'vexflow'
import { connect } from 'react-redux'

const MusicNotation = () => {
  const vf = useRef()
  const score = useRef()
  const system = useRef()

  useEffect(() => {
    vf.current = new Vex.Flow.Factory({renderer: {elementId: 'music-canvas'}});
    score.current = vf.current.EasyScore();
    system.current = vf.current.System();

    system.current.addStave({
      voices: [score.current.voice(score.current.notes('C#5/q, B4, A4, G#4'))]
    }).addClef('treble').addTimeSignature('4/4');

    vf.current.draw();
  }, [])

  return (
    <div id="music-canvas"></div>
  )
}

export default connect(null, null)(MusicNotation)
