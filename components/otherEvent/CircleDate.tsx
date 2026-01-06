import React from 'react'

const CircleDate = ({ receivedDate }: { receivedDate: Date }) => {
    return (
        <div className='border-2 rounded-full border-black size-24 py-4.75 px-3.75 flex flex-col'>
            <span className='lora-font text-[2.25rem] font-medium leading-9 text-center'>{receivedDate.getDate()}</span>
            <span className='inter-font text-center text-[.8125rem]'>{receivedDate.toLocaleString('en-us', {month: 'short'})} {receivedDate.getFullYear()}</span>
        </div>
    )
}

export default CircleDate