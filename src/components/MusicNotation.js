import React, { useRef, useEffect } from 'react'
import Vex from 'vexflow'
import { connect } from 'react-redux'

const MusicNotation = ({ currentNote }) => {
  const vf = useRef()
  const score = useRef()
  const system = useRef()
  const notesRef = useRef('C#5/w')

  useEffect(() => {
    vf.current = new Vex.Flow.Factory({renderer: {elementId: 'music-canvas'}});
    score.current = vf.current.EasyScore();
    system.current = vf.current.System();

    system.current.addStave({
      voices: [score.current.voice(score.current.notes(notesRef.current))]
    }).addClef('treble').addTimeSignature('4/4');

    vf.current.draw();
  }, [])

  useEffect(() => {
    if (currentNote){
      vf.current = new Vex.Flow.Factory({renderer: {elementId: 'music-canvas'}});
      score.current = vf.current.EasyScore();
      system.current = vf.current.System();

      notesRef.current = `${currentNote}/w`
      system.current.addStave({
        voices: [score.current.voice(score.current.notes(notesRef.current))]
      }).addClef('treble').addTimeSignature('4/4');

      vf.current.draw();
    }
  }, [currentNote])

  return (
    <div id="music-canvas"></div>
  )
}

const mapStateToProps = state => {
  return {
    currentNote: state.currentNote
  }
}

export default connect(mapStateToProps, null)(MusicNotation)
