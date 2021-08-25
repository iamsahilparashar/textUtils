import React from 'react'

export default function alert(props) {
    const captilaize = (word) => {
        let newText = word.toLowerCase();
        return newText.charAt(0).toUpperCase() + newText.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {
            props.alert && <div className={`alert alert-${props.alert.type}`} role="alert" style={{ backgroundColor: props.mode === 'light' ? '#0d6efd' : '#198754', color: 'black' }}>
                <strong>{captilaize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        }
        </div>
    )
}
