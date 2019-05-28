import React from 'react'
import { ReactComponent as Tick } from './icons/tick.svg'
import { ReactComponent as Cross } from './icons/cross.svg'

function ResultDisplay({ results }) {
  return (
    <div className="result-container">
      {results.map(({ day, passed }) => (
        <div key={day} className="result">
          Day {day}:{' '}
          {passed ? (
            <Tick height={15} width={15} />
          ) : (
            <Cross height={15} width={15} />
          )}
        </div>
      ))}
    </div>
  )
}

export default ResultDisplay
