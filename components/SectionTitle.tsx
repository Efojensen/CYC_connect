import React from 'react'

const SectionTitle = ({title}: {title: string}) => {
    return (
        <div className='flex gap-1.5 items-center mb-9.25'>
            <div  className='flex w-1 h-2.5 bg-[#F81539] rounded-xl'/>
            <p className='text-[1.25rem] capitalize font-medium lora-font text-sectionTitleColor'>{title}</p>
        </div>
    )
}

export default SectionTitle