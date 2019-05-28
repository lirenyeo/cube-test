import React, { useState } from 'react'
import './App.css'
import CubeInput from './CubeInput'
import ResultDisplay from './ResultDisplay'

const DAYS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']

const sixToNine = arr => arr.map(digit => (digit === '6' ? '9' : digit))

const isCompleted = arr => arr.every(({ passed }) => passed)

function App(props) {
  const [numbers1, setNumbers1] = useState(new Array(6).fill(''))
  const [numbers2, setNumbers2] = useState(new Array(6).fill(''))
  const [attempt, setAttempt] = useState(0)
  const [results, setResults] = useState(
    DAYS.map(day => ({ day, passed: false }))
  )

  const checkMatch = day => {
    const mapped1 = sixToNine(numbers1)
    const mapped2 = sixToNine(numbers2)
    const [a, b] = day.replace(/6/g, '9')
    return (
      (mapped1.includes(a) && mapped2.includes(b)) ||
      (mapped1.includes(b) && mapped2.includes(a))
    )
  }

  const submitAnswer = () => {
    setAttempt(attempt + 1)
    setResults(
      results.map(({ day }) => ({
        day,
        passed: checkMatch(day)
      }))
    )
  }

  return (
    <div>
      <h2>Cube One</h2>
      <CubeInput numbers={numbers1} setNumbers={setNumbers1} />
      <br />
      <br />
      <h2>Cube Two</h2>
      <CubeInput numbers={numbers2} setNumbers={setNumbers2} />
      <br />

      {isCompleted(results) ? (
        <h1>Congratulations! :)</h1>
      ) : (
        <button onClick={submitAnswer}>
          {attempt > 0 ? 'Try Again!' : 'Submit Answer'}
        </button>
      )}

      {attempt > 0 && (
        <>
          <div>Attempt: {attempt}</div>
          <ResultDisplay results={results} />
        </>
      )}
    </div>
  )
}

export default App
