import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter your text here...');
    return (
        <div>
            <h1>{props.heading}</h1>
            
            <div className="mb-3">
                <textarea className="form-control" onChange={handleChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        </div>
    )
}
