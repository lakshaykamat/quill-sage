"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { loginUser } from "../lib"

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const router = useRouter()
    const log = async()=>{
       // e.preventDefault();
        try {
         const res =await loginUser(loginData.username,loginData.password)
             if(res === "success") return router.push('/')

        } catch (error) {
            
            console.log("Error"+error)
        }
        
    }
    return (
        <>
            <div className="max-w-xl mx-auto">
                <div className="flex flex-col gap-2 mx-auto">
                    <h1 className="mb-4 text-3xl font-bold">Login</h1>
                    
                    <input type="text" 
                    value={loginData.username}
                    name="username"
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} placeholder="Enter the email"
                    className="px-3 py-1 rounded bg-light" />
                    
                    <input type="password" 
                    name="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}  placeholder="Enter the password" className="px-3 py-1 rounded bg-light" />
                </div>
                <button  type="submit" onClick={log} className="px-4 py-1 mt-3 bg-button">
                    Login
                </button>
            </div>
        </>
    )
}

export default Login