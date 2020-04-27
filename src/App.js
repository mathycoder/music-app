import React from 'react'
import DemoContainer from './containers/DemoContainer'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body style={styles.containerDiv}>
        <DemoContainer />
        <div style={styles.bottomDiv}>hi</div>
      </body>
    </div>
  );
}

const styles = {
  containerDiv: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  bottomDiv: {
    flex: 1,
    backgroundColor: 'rgb(95,95,95)'
  }
}

export default App;
