'use client'

import Image from 'next/image'
import { useState } from 'react'

export const UploadEventInputBar = ({ hintText }: { hintText: string }) => {
    const [text, setText] = useState<string>('')

    return (
        <div className='py-1.75 px-2.5 flex space-between items-center rounded-[.625rem] border border-[#E0E5F2] bg-[#E0E5F2]'>
            <input
                value={text}
                placeholder={hintText}
                onChange={(e) => { setText(e.target.value) }}
                className='focus:outline-none w-full dmSans-font text-[#94A3B8] text-sm font-medium leading-3.5 tracking-[-0.0175rem]'
            />
        </div>
    )
}

interface AuthInputProps {
    hintText: string
    value: string
    onChange: (value: string) => void
    isPassword?: boolean
}

export const AuthInput: React.FC<AuthInputProps> = ({
    hintText,
    value,
    onChange,
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

