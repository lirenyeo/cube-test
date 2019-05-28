import React, { useRef, createRef } from 'react'

function CubeInput({ numbers, setNumbers }) {
  let refs = useRef(new Array(numbers.length).fill().map(a => createRef()))

  const handleInput = ({ target: { id, value } }) => {
    if ((!value.match(/^[0-9]*$/))) return

    const newNumbers = numbers.slice(0)
    newNumbers[id] = value
    setNumbers(newNumbers)

    if (value && parseInt(id) < numbers.length - 1) {
      refs.current[parseInt(id) + 1].current.focus()
    }
  }

  return (
    <>
      {numbers.map((num, index) => (
        <div className="digit-div" key={index}>
          <input
            ref={refs.current[index]}
            maxLength={1}
            className="digit-input"
            type={num}
            value={num}
            id={index}
            onChange={handleInput}
          />
          <span className="bottom" />
          <span className="right" />
          <span className="top" />
          <span className="left" />
        </div>
      ))}
    </>
  )
}

export default CubeInput
