'use client'

import Image from 'next/image'
import { useState } from 'react'

const SearchBar = () => {
    const [text, setText] = useState<string>('')

    return (
        <div className='flex p-4 w-127.5 items-center rounded-2xl bg-searchFieldBackground text-searchFieldTextColor justify-between'>
            <input
                value={text}
                placeholder='search here...'
                onChange={(e) => {setText(e.target.value)}}
                className='focus:outline-none w-full'
            />
            <Image
                width={24}
                height={24}
                alt='search icon'
                src='/svgs/search.svg'
                className='hover:cursor-pointer'
            />
        </div>
    )
}

export default SearchBar