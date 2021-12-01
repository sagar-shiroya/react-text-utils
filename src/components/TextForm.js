import React, {useState} from 'react'

export default function TextForm(props) {
    
    // Convert to Uppercase
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        if(text === ''){
            props.showAlert("There is no text to convert.", "warning");
        } else {
            props.showAlert("Converted to Uppercase", "success");
        }
    }
    // Convert to Lowercase
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        if(text === ''){
            props.showAlert("There is no text to convert.", "warning");
        } else {
            props.showAlert("Converted to Lowercase", "success");
        }
    }
    // Remove Extra Spaces
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }
    //Clear Text
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    // Copy to clipboard
    const handleCopyClick = ()=>{
        if(text === ''){
            props.showAlert("There is no text to copy.", "warning");
        } else {
            navigator.clipboard.writeText(text).then(function(){
                props.showAlert("Copied to clipboard!", "success");
            });
        }
    }
    // OnChange in TextArea
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter your text here..." style={{backgroundColor: props.mode==='dark'? 'white' : '#042743', color: props.mode==='dark'? 'black' : 'white'}} onChange={handleChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleCopyClick} >Copy to Clipboard</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button className="btn btn-danger mx-3 my-3" onClick={handleClearClick} >Clear Text</button>
            </div>

            <div className="container my-4 mx-1" style={{color: props.mode==='dark'? 'white' : 'black'}}>
                <h1>Text Summary</h1>
                <p>Number of words: {(text !== '') ? text.split(" ").length : 0} </p>
                <p>Number of characters: {text.length}</p>
                <p>{0.08 * text.split(" ").length} minutes read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
