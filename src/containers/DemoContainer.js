import React from 'react'
import Fretboard from '../components/Fretboard'
import * as Tone from 'tone'

const DemoContainer = () => {
  const synth = new Tone.Synth().toMaster();

  return (
    <div style={styles.demoWrapper}>
      <Fretboard />
    </div>
  )
}

const styles = {
  demoWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

export default DemoContainer
