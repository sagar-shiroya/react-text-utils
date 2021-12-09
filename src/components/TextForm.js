import React, {useState} from 'react'

export default function TextForm(props) {

    // Convert to Uppercase
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    // Convert to Lowercase
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
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
            navigator.clipboard.writeText(text).then(function(){
                props.showAlert("Copied to clipboard!", "success");
            });
    }
    // OnChange in TextArea
    const handleChange = (event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState('');
    return (
        <>
            <div className="container my-5" style={{color: props.mode==='dark'? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter your text here..." style={{backgroundColor: props.mode==='dark'? 'white' : '#042743', color: props.mode==='dark'? 'black' : 'white'}} onChange={handleChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopyClick} >Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-2" onClick={handleClearClick} >Clear Text</button>
            </div>

            <div className="container my-4 mx-1" style={{color: props.mode==='dark'? 'white' : 'black'}}>
                <h1>Text Summary</h1>
                <p>Number of words: {text.split(" ").filter(item => item!=='').length} </p>
                <p>Number of characters: {text.length}</p>
                <p>{0.08 * text.split(" ").filter(item => item!=='').length} minutes read </p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : 'Nothing to preview.'}</p>
            </div>
        </>
    )
}
