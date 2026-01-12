'use client'

import Image from 'next/image'
import { useState } from 'react'

interface UploadEventInputBarProps {
    src?: string
    hintText: string
    type?: React.HTMLInputTypeAttribute
}

export const UploadEventInputBar:React.FC<UploadEventInputBarProps> = ({ src, hintText, type='text' }) => {
    const [text, setText] = useState<string>('')

    return (
        <div className='py-1.75 px-2.5 flex space-between items-center rounded-[.625rem] border border-[#E0E5F2] bg-[#FFF] justify-between hover:cursor-pointer'>
            <input
                type={type}
                value={text}
                placeholder={hintText}
                onChange={(e) => { setText(e.target.value) }}
                className='focus:outline-none w-full dmSans-font text-[#94A3B8] text-sm font-medium leading-3.5 tracking-[-0.0175rem]'
            />
            {src && (
                <Image
                    alt={src}
                    src={src}
                    width={16}
                    height={16}
                />
            )}
        </div>
    )
}

interface AuthInputProps {
    value: string
    hintText: string
    isPassword?: boolean
    onChange: (value: string) => void
}

export const AuthInput: React.FC<AuthInputProps> = ({
    value,
    onChange,
    hintText,
    isPassword = false,
}) => {
    const [show, setShow] = useState(false)

    return (
        <div className="flex py-3.5 px-4 border rounded-md border-[#E6E6E6] items-center gap-2 w-full md:w-118">
            <input
                value={value}
                type={isPassword && !show ? 'password' : 'text'}
                placeholder={hintText}
                onChange={(e) => onChange(e.target.value)}
                className="focus:outline-none w-full dmSans-font text-[#999] text-[1rem] leading-[1.3rem]"
            />

            {isPassword && (
                <Image
                    width={20}
                    height={20}
                    alt="toggle password visibility"
                    src="/svgs/red_eye.svg"
                    className="cursor-pointer"
                    onClick={() => setShow((prev) => !prev)}
                />
            )}
        </div>
    )
}

