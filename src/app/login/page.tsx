"use client"
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from "next/navigation";
import { useState } from 'react';
import axios from 'axios';
import { loginUser } from '../utils/api/user';
import { useMutation } from '@tanstack/react-query';

type User = {
    username:String
    password:String
    error:String
}

const LoginForm = () => {
    const router = useRouter()
    const [LoginForm, setLoginForm] = useState<User>({ username: "", password: "", error: "" })

    const loginMutation = useMutation({
        mutationFn:loginUser,
        onSuccess:()=>router.push(`http://localhost:3000`),
        onError:(err)=> {
            //@ts-ignore
            const msg = err?.response.data.message
            setLoginForm({...LoginForm,error:msg})
        }
    })
    const login = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        loginMutation.mutate({
            username:LoginForm.username,
            password:LoginForm.password
        })
    }


    const googleSignIn = () => {
        router.push(process.env.NEXT_PUBLIC_SERVER_URL + '/auth/google')
    }
    return (
        <main className='max-w-lg mx-auto my-12 px-7'>
            <form className='flex flex-col' onSubmit={login} >
                <h2 className='mb-2'>Login</h2>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="username"
                        onChange={(e) => setLoginForm({ ...LoginForm, username: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-blue-200  focus:outline-4 focus:outline block w-full p-2.5"
                        placeholder="lakahaykamat.dev@gmail.com"
                        value={LoginForm.username.toString()}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        placeholder='******'
                        onChange={(e) => setLoginForm({ ...LoginForm, password: e.target.value })}
                        value={LoginForm.password.toString()}

                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-blue-200  focus:outline-4 focus:outline block w-full p-2.5"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`button-1 ${loginMutation.isLoading && "opacity-70"}`}
                    disabled={loginMutation.isLoading}
                >
                   {loginMutation.isLoading ? "Loading..." : "Sign in"}
                </button>
            </form>
            <button onClick={googleSignIn} className='w-full text-sm focus:ring-4 hover:bg-gray-100 flex gap-3 font-medium focus:outline-none focus:ring-blue-300 mt-5 text-center justify-center rounded drop-shadow bg-white px-5 py-2.5 items-center my-2'>
                <FcGoogle className='text-3xl' />
                <span>Sign in With Google</span>
            </button>
            {LoginForm.error && <p className='my-2 text-sm text-red-400'>{LoginForm.error}</p>}

        </main>
    )
}

export default LoginForm