import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextFrom(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert('Converted to Uppercase', 'success')
    }

    const handleLowClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert('Converted to Lowercase', 'success')
    }

    const handleTrimClick = () => {
        let newtext = text.trimEnd();
        setText(newtext)
        props.showAlert('Removed space at the end', 'success')
    }

    const handleClearClick = () => {
        let newtext = ''
        setText(newtext)
        props.showAlert('Text is cleared', 'success')
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text has been copied', 'success')
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert('Extra spaces removed', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="mb-3 my-2" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <div>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="5"></textarea>
                </div>
                <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleTrimClick}>Remove Space at the End</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className='container my-2' style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>
                    Your Text Summary
                </h1>
                <p>{text.length === 0 ? 0 : text.split(" ").length} words and {text.length} characters</p>
                <p>{text.length === 0 ? 0 : 0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0 ? text : 'Write something in Text Box above to preview here'}
                </p>

            </div>

        </>
    )
}

TextFrom.propTypes = {
    heading: PropTypes.string.isRequired
}

TextFrom.defaultProps = {
    heading: 'Set Heading here'
}