"use client"
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'

const RegisterFormPage = () => {
    const router = useRouter()
    const [RegisterFrom, setRegisterFrom] = useState<{ username: String, email: String, password: String, error: String }>({ username: "", email: "", password: "", error: "" })

    const registerUser = async() => {
        let data = JSON.stringify({
            "username": RegisterFrom.username,
            "password": RegisterFrom.password,
            "email": RegisterFrom.email
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/auth/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };


        try {
            const response = await axios.request(config);
            if(response.data.error){
                return
            }else{
                router.push('http://localhost:3000/login'
            }
        }
        catch (error) {
            console.log(error);
        }


    }
    return (
        <main className='max-w-lg mx-auto my-12 px-7'>
            <form className='flex flex-col' onSubmit={() => { }} >
                <h2 className='mb-2'>Register</h2>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => setRegisterFrom({ ...RegisterFrom, username: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Lakshay Kamat"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setRegisterFrom({ ...RegisterFrom, email: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="thisislakahaykamat@gmail.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        placeholder='******'
                        onChange={(e) => setRegisterFrom({ ...RegisterFrom, password: e.target.value })}

                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Sign in
                </button>
                <button className='button-1'>Register</button>
            </form>
            <button onClick={() => { }} className='w-full text-sm focus:ring-4 hover:bg-gray-100 flex gap-3 font-medium focus:outline-none focus:ring-blue-300 mt-5 text-center justify-center rounded drop-shadow bg-white px-5 py-2.5 items-center my-2'>
                <FcGoogle className='text-3xl' />
                <span>Sign in With Google</span>
            </button>
            {RegisterFrom.error && <p className='my-2 text-sm text-red-400'>{RegisterFrom.error}</p>}

        </main>
    )
}

export default RegisterFormPage