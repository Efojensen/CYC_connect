'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from '@node_modules/next/link'

interface SubNavBarTileProps {
    label: string
    links: string[]
    items?: string[]
}

const SubNavBarTile:React.FC<SubNavBarTileProps> = ({ label, items, links }) => {
    const [isActivated, setIsActivated] = useState<boolean>(false)

    const onPress = () => {
        setIsActivated(!isActivated)
    }

    return (
        <div className='flex gap-2 hover:cursor-pointer' onClick={onPress}>
            <p className='text-searchFieldTextColor lora-font text-[1rem]'>{label}</p>
            <Image
                width={14}
                height={7}
                src='/svgs/dropdown_arrow.svg'
                alt='dropdown arrow to show sub links'
                className={`${isActivated && 'rotate-180'}`}
            />

            {isActivated && (
                <div className='absolute flex flex-col md:w-82 bg-white text-center mt-8 gap-2'>
                    {items?.map((item, index) => (
                        <div key={index} className='hover:bg-mainNavTileActive hover:opacity-80'>
                            <Link
                                href={links[index]}
                                className='inter-font text-[1rem]'>{item}</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SubNavBarTile