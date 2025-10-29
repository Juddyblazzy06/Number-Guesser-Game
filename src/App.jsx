import React, { useState } from 'react'
import Game from './components/Game'
import DifficultySelector from './components/DifficultySelector'

function App() {
  const [difficulty, setDifficulty] = useState('medium')
  const [key, setKey] = useState(0) // Used to force re-render of Game component

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty)
  }

  const handleRestart = () => {
    setKey(prev => prev + 1) // Change key to unmount and remount Game component
  }

  return (
    <div className="App">
      <h1>🎯 Number Guesser Game</h1>
      <p>Try to guess the secret number between 1 and 100!</p>
      
      <DifficultySelector 
        difficulty={difficulty}
        onDifficultyChange={handleDifficultyChange}
        disabled={false}
      />

      <Game 
        key={key}
        difficulty={difficulty}
        onRestart={handleRestart}
      />
    </div>
  )
}

export default App

