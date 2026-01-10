'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AuthInput } from '@components/input'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <main>
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
                    <AuthInput
                        hintText="Confirm Password"
                        isPassword
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                    />
                </div>
                <p className='text-sm leading-5.25 text-[#666]'>Accept all terms & Conditions</p>
                <div className='flex justify-center'>
                    <Link
                        href=''
                    >
                        <OAuthButton src='/svgs/google.svg'/>
                    </Link>
                </div>
                <button className='w-full bg-tertiaryNavBarBackground py-3.5 font-semibold leading-[1.05rem] text-sm text-white rounded-[.625rem]'>
                    Create Account
                </button>
                <div className='flex items-center justify-center gap-1'>
                    <p className='text-sm leading-5.25 dmSans-font text-[#666] text-center'>Already have an account?</p>
                    <Link href='/auth/login' className='text-sm leading-5.25 dmSans-font text-center text-specialBlackTextColor'>Login</Link>
                </div>
            </div>
        </main>
    )
}

export default SignUp

export const OAuthButton = ({src}: {src: string}) => {
    return (
        <div className='flex size-9 p-2.5 bg-tertiaryNavBarBackground rounded-[.4375rem]'>
            <Image
                src={src}
                width={16}
                height={16}
                alt={`${src} register`}
            />
        </div>
    )
}
