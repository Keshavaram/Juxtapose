import React, { useState } from 'react'
import {useHistory} from "react-router-dom";

import "../login.css"
import '../index.css'

function App() {
    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            history.push('/Login')
        }
    }

    return (
        <section>
            <div className={"topBar"}>
                <header id={"heading"}>{"Juxtapose"}</header>
            </div>
            <div className={"form"}>
                <h1>Register</h1>
                <form onSubmit={registerUser}>
                    <input className={"entries"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                    />
                    <br />
                    <input className={"entries"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <br />
                    <input className={"entries"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <br />
                    <input className={"entries"}
                           type="submit"
                           value="Register" />
                </form>
            </div>
        </section>
    )
}

export default App
