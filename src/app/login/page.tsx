"use client"
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from "next/navigation";
import { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const router = useRouter()
    const [LoginForm,setLoginForm] = useState<{username:String,password:String,error:String}>({username:"",password:"",error:""})

      
    const signIn = async(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        let data = JSON.stringify({
            "username": LoginForm.username,
            "password": LoginForm.password
          });
          console.log(data)
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
            headers: { 
              'Content-Type': 'application/json',
            },
            data : data,
            withCredentials: true
          };
    
          try {
            const response = await axios.request(config);
            if(response.data === "Something went wrong"){
                setLoginForm({...LoginForm,error:response.data})
            }else{
                router.push("http://localhost:3000")

            }
          }
          catch (error) {
            console.log(error);
          }
    }


    const googleSignIn = () => {
        router.push(process.env.NEXT_PUBLIC_SERVER_URL + '/auth/google')
    }
    return (
        <main className='max-w-lg mx-auto my-12 px-7'>
            <form className='flex flex-col' onSubmit={signIn} >
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
                        onChange={(e)=>setLoginForm({...LoginForm,username:e.target.value})}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="thisislakahaykamat@gmail.com"
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
                        onChange={(e)=>setLoginForm({...LoginForm,password:e.target.value})}
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="button-1"
                >
                    Sign in
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

function mutate(formData: any, arg1: { onSuccess: () => void; onError: (error: any) => void; }) {
    throw new Error('Function not implemented.');
}
