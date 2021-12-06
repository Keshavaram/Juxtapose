import React, { useState } from 'react'
import '../index.css'
import '../login.css'

function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            window.location.href = '/Home'
        } else {
            alert('Please check your username and password')
        }
    }

    return (
        <section>
            <nav className={"topBar"}>
                <button className={"generalBtn"}
                        onClick={()=>{window.location.href = '/register'}}>
                    Register
                </button>
            </nav>
            <div className={"topBar"}>
                <header id={"heading"}>{"Juxtapose"}</header>
            </div>
            <div className={"form"}>
                <h1>Login</h1>
                <form onSubmit={loginUser}>
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
                        value="Login" />
                </form>
            </div>
        </section>
    )
}

export default App
