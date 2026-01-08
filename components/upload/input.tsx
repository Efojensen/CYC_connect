'use client'

import { useState } from 'react'

const UploadEventInputBar = ({hintText} : {hintText: string}) => {
    const [text, setText] = useState<string>('')

    return (
        <div className='py-1.75 px-2.5 flex space-between items-center rounded-[.625rem] border border-[#E0E5F2] bg-[#E0E5F2]'>
            <input
                value={text}
                placeholder={hintText}
                onChange={(e) => {setText(e.target.value)}}
                className='focus:outline-none w-full dmSans-font text-[#94A3B8] text-sm font-medium leading-3.5 tracking-[-0.0175rem]'
            />
        </div>
    )
}

export default UploadEventInputBar