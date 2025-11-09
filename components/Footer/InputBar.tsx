'use client'

import { useState } from 'react'

const InputBar = ({placeholder}: {placeholder: string}) => {
    const [text, setText] = useState<string>('')

    return (
        <div className='flex py-3.75 pl-4.5 lato-font text-[1.25rem] text-white rounded-2xl flex-1 border-white border'>
            <input
                value={text}
                placeholder={placeholder}
                onChange={(e) => {setText(e.target.value)}}
                className='focus:outline-none w-full rounded-2xl'
            />
        </div>
    )
}

export default InputBar