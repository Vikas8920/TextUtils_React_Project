import React, {useState} from 'react'


function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase()         
    setText(newText)
    props.showAlert('converted to uppercase', 'success')
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase()         
    setText(newText)
    props.showAlert('converted to lowercase', 'success')
  }

  const handleClearClick = () => {
    let newText =''                          
    setText(newText)
    props.showAlert('Text cleared', 'success')
  }

  const handleOnChange = (e) => {
    setText(e.target.value)            
  }

  const handleCopy = () => {                                      
    navigator.clipboard.writeText(text)             
    props.showAlert('Copied to Clipboard', 'success')
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)             
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed', 'success')
  }

  const [text, setText] = useState('')      

  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
    <h2 className='mb-4 ms-4'>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e' : 'white', color: props.mode==='dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn-primary ms-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn-primary ms-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn-primary ms-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn-primary ms-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn-primary ms-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(word => word!=='').length} words and {text.length} characters </p>
        <p>{0.008 * text.split().filter(word => word!=='').length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}

export default TextForm
