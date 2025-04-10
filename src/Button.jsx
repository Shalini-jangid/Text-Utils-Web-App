import React, { useState } from 'react'

function Button() {
  const [num, setNum] = useState(0);

  const Increment = () => {
    if (num < 10) setNum(num + 1);
  };

  const Decrement = () => {
    if (num > 0) setNum(num - 1);
  };
  return (
    <div>
      <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="counter-box text-center p-4 rounded shadow">
        <h1 className="display-3 mb-4">{num}</h1>
        <div>
          <button
            type="button"
            className="btn btn-outline-success mx-2"
            onClick={Increment}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-outline-danger mx-2"
            onClick={Decrement}
          >
            Decrement
          </button>
        </div>
        <p className="mt-3 text-muted">Counter range: 0 to 10</p>
      </div>
    </div>
    </div>
  )
}

export default Button