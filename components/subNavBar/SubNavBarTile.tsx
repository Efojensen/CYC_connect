'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SubNavBarTileProps {
    label: string
    items?: string[]
}

const SubNavBarTile:React.FC<SubNavBarTileProps> = ({ label, items}) => {
    const [isActivated, setIsActivated] = useState<boolean>(false)

    const onPress = () => {
        setIsActivated(!isActivated)
    }

    return (
        <div className='flex gap-2' onClick={onPress}>
            <p className='text-searchFieldTextColor lora-font text-[1rem]'>{label}</p>
            <Image
                width={14}
                height={7}
                src='/svgs/dropdown_arrow.svg'
                alt='dropdown arrow to show sub links'
                className={`${isActivated && 'rotate-180'}`}
            />

            {isActivated && (
                <>
                    {items?.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default SubNavBarTile