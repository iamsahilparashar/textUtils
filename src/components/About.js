import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // });

    const [myStyleLight, setMyStyleLight] = useState({
        color: 'white',
        backgroundColor: 'black'
    });
    const [myStyleDark, setMyStyleDark] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: "2px solid white"
    });

    // const [btnState, setbtnState] = useState("Enable light mode")

    // const changeMode = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtnState("Enable light mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: "2px solid white"
    //         })
    //         setbtnState("Enable dark mode")
    //     }
    // }
    return (
        <>
            <div className="container" style={props.mode === 'dark'?myStyleLight:myStyleDark}>
                <h1>{props.heading}</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={props.mode === 'dark'?myStyleLight:myStyleDark} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze Your text </strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={props.mode === 'dark'?myStyleLight:myStyleDark} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={props.mode === 'dark'?myStyleLight:myStyleDark} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={props.mode === 'dark'?myStyleLight:myStyleDark} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={props.mode === 'dark'?myStyleLight:myStyleDark} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={props.mode === 'dark'?myStyleLight:myStyleDark} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-2">
                    <button className="btn btn-primary" onClick={changeMode}>{btnState}</button>
                </div> */}
            </div>
        </>
    )
}