import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text="sahil parashar"; // wrong way to change the state
    // setText("hello sahil"); // correct way to change the state
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        setText("you have clicked on convert to uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("coverted to uppercase!","success");
    }
    const handleLoClick = () => {
        // console.log("uppercase was clicked" + text);
        setText("you have clicked on convert to lowercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("coverted to lowercase!","success");
    }
    const copyText = () => {
        // console.log("uppercase was clicked" + text);
        var newText = document.getElementById("textA");
        newText.select();
        document.execCommand('copy');
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied!","success");
    }
    const clearText = () => {
        // console.log("uppercase was clicked" + text);
        setText("you have clicked on convert to lowercase");
        let newText = '';
        setText(newText);
        props.showAlert("text has been cleared !","success");
    }
    const handleOnChange = (event) => {
        // console.log("handleOnChange was clicked");
        setText(event.target.value);
    }
    const removeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("extra spaces has been removed!","success");
    }
    return (
        <>
            <div style={{color:props.mode === 'light' ? 'black' : 'white'}}>
                <div className="mb-2">
                    <h2>{props.heading}</h2>
                    {/* <textarea className="form-control" name="textA" placeholder="Enter a text here" rows="8"></textarea> */}
                    <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'black' : 'white',color:props.mode === 'light' ? 'black' : 'white'}} name="textA" id="textA" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <div>
                    <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark'?'success' : 'primary'} mx-1 my-1`} onClick={handleUpClick}>Covert to uppercase</button>
                    <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark'?'success' : 'primary'} mx-1 my-1`} onClick={handleLoClick}>Covert to lowercase</button>
                    <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark'?'success' : 'primary'} mx-1 my-1`} onClick={copyText}>Copy text</button>
                    <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark'?'success' : 'primary'} mx-1 my-1`} onClick={clearText}>Clear text</button>
                    <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark'?'success' : 'primary'} mx-1 my-1`} onClick={removeSpace}>Remove Extra Spaces </button>
                </div>
                <div className="my-3">
                    <h3>Summary</h3>
                    <p>{text.split(' ').filter((element)=>{return element.length !==0}).length} <b>words</b> and {text.length} <b>characters</b></p>
                </div>
                <div>
                    <h3>Preview</h3>
                    <p>{`${text.length > 0 ? text : "Nothing to preview.."}`}</p>
                </div>
            </div>
        </>
    )
}
