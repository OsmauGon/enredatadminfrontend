"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage (){
    const router = useRouter()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = (e: React.FormEvent)=>{
        e.preventDefault()

        if(email === "admin@test.com" && password === "12345678") {
            localStorage.setItem("auth","true")
            router.push('/dashboard')
        } else {
            alert("Credenciales invalidas")
        }
    }
    return (
        <div style={{padding: 20}}>
            <h1 >Login de admin</h1>
            <form onSubmit={handleLogin} className="container mt-4">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Iniciar sesión
                </button>
            </form>
    </div>
    )
}