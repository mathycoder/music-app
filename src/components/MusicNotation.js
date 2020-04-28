import React, { useRef, useEffect, useState } from 'react'
import Vex from 'vexflow'
import { connect } from 'react-redux'

const MusicNotation = ({ currentNote }) => {
  const [VF, setVF] = useState(Vex.Flow)
  const rendererRef = useRef(null)
  const contextRef = useRef(null)
  const staveRef = useRef(null)

  useEffect(() => {
    const div = document.getElementById("music-canvas")
    rendererRef.current = new VF.Renderer(div, VF.Renderer.Backends.SVG)
    contextRef.current = rendererRef.current.getContext()
    rendererRef.current.resize(600,250)
    staveRef.current = new VF.Stave(40, 0, 500);
    staveRef.current.addClef("treble").addTimeSignature("4/4");
    staveRef.current.setContext(contextRef.current).draw();
  }, [])

  return (
    <>
      <div id="music-canvas" style={styles.canvasStyle}></div>
      <div
        style={styles.rightStyle}
        onClick={() => contextRef.current.svg.removeChild(contextRef.current.svg.lastChild)}
        >
        <button>Do Things</button>
      </div>
    </>
  )
}

const styles = {
  canvasStyle: {
    flex: 1,
    alignSelf: 'stretch',
  },
  rightStyle: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const mapStateToProps = state => {
  return {
    currentNote: state.currentNote
  }
}

export default connect(mapStateToProps, null)(MusicNotation)
