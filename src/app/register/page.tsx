"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { registerUser } from '../utils/api/user'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'

const RegisterFormPage = () => {
    const router = useRouter()
    const [RegisterFrom, setRegisterFrom] = useState<{ username: String, email: String, password: String, error: String }>({ username: "", email: "", password: "", error: "" })

    const registerMutaion = useMutation({
        mutationFn:registerUser,
        onSuccess:()=>router.push(`http://localhost:3000/login`),
        onError:(err)=> {
            //@ts-ignore
            const msg = err?.response?.data?.message
            setRegisterFrom({...RegisterFrom,error:msg})
        }
    })

    const handleSubmit = (e: { preventDefault: () => void })=>{
        e.preventDefault()
        registerMutaion.mutate({
            username:RegisterFrom.username,
            email:RegisterFrom.email,
            password:RegisterFrom.password
        })
    }
    return (
        <main className='max-w-lg mx-auto my-12 px-7'>
            <form className='flex flex-col' onSubmit={handleSubmit} >
                <h2 className='mb-2'>Register</h2>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => setRegisterFrom({ ...RegisterFrom, username: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Lakshay Kamat"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setRegisterFrom({ ...RegisterFrom, email: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-blue-200  focus:outline-4 focus:outline block w-full p-2.5"
                        placeholder="lakahaykamat.dev@gmail.com"
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
                        onChange={(e) => setRegisterFrom({ ...RegisterFrom, password: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-blue-200  focus:outline-4 focus:outline block w-full p-2.5"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`button-1 ${registerMutaion.isLoading && "opacity-70"}`}
                    disabled={registerMutaion.isLoading}
                >
                    {registerMutaion.isLoading ? "Loading..." : "Register"}
                </button>
            </form>
            <button onClick={() => { }} className='w-full text-sm focus:ring-4 hover:bg-gray-100 flex gap-3 font-medium focus:outline-none focus:ring-blue-300 mt-5 text-center justify-center rounded drop-shadow bg-white px-5 py-2.5 items-center my-2'>
                <FcGoogle className='text-3xl' />
                <span>Sign in With Google</span>
            </button>
                <p className='my-2 text-sm text-right'>Already have an account? <Link href="/login" className='text-blue-700 underline'>Login</Link></p>
            {RegisterFrom.error && <p className='my-2 text-sm font-bold text-center text-red-400'>{RegisterFrom.error}</p>}
           

        </main>
    )
}

export default RegisterFormPage