import React from "react";
import '../index.css'

const styling = {
    "font-size" : "40px",
    "display" : "block",
    "margin-left" : "auto",
    "margin-right" : "auto",
    "width" : "10rem",
}

const styling2 = {
    "font-size" : "40px",
    "display" : "block",
    "margin-left" : "auto",
    "margin-right" : "auto",
    "width" : "1rem",
}

const styling3 = {
    "font-size" : "40px",
    "display" : "block",
    "margin-left" : "auto",
    "margin-right" : "auto",
    "width" : "8rem",
    "border-radius" : "20px",
}

function WelcomePage() {
    return (
        <section>
            <div className={"topBar"}>
                <header id={"heading"}>{"Juxtapose"}</header>
            </div>
            <section>
                <h1 style={styling}>Welcome</h1>
                <h1 style={styling2}>to</h1>
                <h1 style={styling}>Juxtapose</h1>
                <button onClick={()=>{window.location.href = '/Login'}} style={styling3}>{"->"}</button>
            </section>
        </section>)
}
export default WelcomePage