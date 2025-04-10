import React, { useState } from 'react'

function Clipboard() {
  const [text, setText] = useState('')

  const handle = (e) => {
    setText(e.target.value)
  }
  let uppercase = () => {
    setText(text.toUpperCase())
  }
  let lowercase = () => {
    setText(text.toLowerCase())
  }
  let copy = () => {
    navigator.clipboard.writeText(text)
  }
  let paste = () => {
    navigator.clipboard.readText().then(res => setText(res + "" + text))
  }
  let clear = () => {
    setText('')
  }
  let wrd = text.split(' ')
  let wrdcount = wrd.filter((word) => word !== "").length
  let count = text.replaceAll(' ', "").length
  return (
    <div>
      <div className='main'>
        <label for="exampleFormControlTextarea1" className="form-label mt-3" value>Write something...</label>
        <textarea className="form-control box" id="exampleFormControlTextarea1" rows="5" onChange={handle} value={text}></textarea>
      </div>
      <div classNameName='button'>
        <button type="button" className="btn btn-primary m-3" onClick={uppercase}>Uppercase</button>
        <button type="button" className="btn btn-success m-3" onClick={lowercase}>Lowercase</button>
        <button type="button" className="btn btn-danger m-3" onClick={copy}>Copy</button>
        <button type="button" className="btn btn-warning m-3" onClick={paste}>Paste</button>
        <button type="button" className="btn btn-info m-3" onClick={clear}>Clear</button>
      </div>
      <p>Word :{wrdcount}</p>
      <p>Character:{count}</p>
      <h5 id='preview'>Preview...</h5>
      <textarea className="form-control box" id="exampleFormControlTextarea1" rows="5" onChange={handle} value={text}></textarea>
    </div>
  )
}

export default Clipboard