'use client'

import Link from 'next/link'
import LoadingSpinner from '@app/loading'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { OAuthButton } from '../signUp/page'
import { AuthInput } from '@components/input'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    useEffect(() => {
        document.body.style.overflow = isLoading ? 'hidden' : 'auto'
    }, [isLoading])

    const url = process.env["NEXT_PUBLIC_MASTER"]

    const sendFormData = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`${url}admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email.toLowerCase().trim(),
                    password: password.toLowerCase().trim()
                })
            })

            if (!res.ok) {
                alert('Error logging in')
                return
            }

            const data = await res.json()
            localStorage.setItem('auth_token', data.token);

            router.replace('/')
        } catch (error) {
            console.error(error)
            alert(error)
            return
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main>
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <LoadingSpinner />
                </div>
            )}
            <div className='flex flex-col m-auto px-6 pt-6 pb-8 w-full md:w-130 gap-5 shadow-md mt-20 md:mt-21.75'>
                <h2 className='lora-font text-[2rem] font-semibold leading-[2.4rem] text-specialBlackTextColor'>Create Account</h2>
                <div className='flex flex-col gap-3'>
                    <AuthInput
                        hintText='Email'
                        value={email}
                        onChange={setEmail}
                    />
                    <AuthInput
                        hintText="Password"
                        isPassword
                        value={password}
                        onChange={setPassword}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-sm leading-5.25 text-[#666]'>Remember me</p>
                    <p className='text-sm leading-5.25 text-[#666]'>Forgot Password?</p>
                </div>
                <div className='flex justify-center'>
                    <Link
                        href=''
                    >
                        <OAuthButton src='/svgs/google.svg' />
                    </Link>
                </div>
                <button
                    disabled={isLoading}
                    onClick={sendFormData}
                    className='w-full bg-tertiaryNavBarBackground py-3.5 font-semibold leading-[1.05rem] text-sm text-white rounded-[.625rem] cursor-pointer'
                >
                    Login
                </button>
                <div className='flex items-center justify-center gap-1'>
                    <p className='text-sm leading-5.25 dmSans-font text-[#666] text-center'>Don&apos;t have an account?</p>
                    <Link href='/auth/signUp' className='text-sm leading-5.25 dmSans-font text-center text-specialBlackTextColor'>Register</Link>
                </div>
            </div>
        </main>
    )
}

export default Login