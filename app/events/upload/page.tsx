'use client'

import Image from 'next/image'
import { useState } from 'react'
import { UploadEventInputBar } from '@components/input'

const Page = () => {
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    // const formData = new FormData()
    const modelData = () => {
        console.log("Date", date)
        console.log("Title", title)
        console.log("Address", address)
        console.log("Location", location)
        console.log("Description", description)
    }

    return (
        <main className='md:mt-52 mt-12 px-2 md:px-91'>
            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 text-eventUploadTextColor'>Event Title*</p>
            <UploadEventInputBar hintText='Leadership Summit 2025'
                value={title} onChange={setTitle} />

            <div className='flex flex-col w-full h-65 md:h-134.75 md:py-29.25 md:px-81.25 items-center justify-center gap-2.5 border border-dashed border-tertiaryNavBarBackground mt-17.5'>
                <Image
                    width={27.19}
                    height={29.33}
                    alt='upload image'
                    src='/svgs/upload.svg'
                />
                <div className='flex flex-col items-center w-full'>
                    <p className='dmSans-font text-[1rem] font-medium leading-6 text-[#181D27]'>Browse through files</p>
                    <p className='text-[#6C606C] dmSans-font text-sm leading-5'>Format: .jpeg, .png & Max file size: 25 MB</p>
                </div>
                <button className='py-1 px-4 flex items-center rounded-lg bg-tertiaryNavBarBackground text-white hover:cursor-pointer'>
                    Browse files
                </button>
            </div>

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>Description*</p>
            <div className='flex flex-column w-full border-2 border-tertiaryNavBarBackground h-65 md:h-134.75'>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Enter in the description of the event'
                    className='w-full focus:outline-none mt-1 pl-2'
                >
                </textarea>
            </div>

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>Date*</p>
            <UploadEventInputBar hintText='Choose a date' type='date' value={date} onChange={() => { }} onChangeDate={(value) => {
                const selectedDate = new Date(value)
                setDate(selectedDate.toISOString())
            }} />

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>Location*</p>
            <UploadEventInputBar hintText='e.g Tema Comm 1, OLAM' value={location} onChange={setLocation} />

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>Full address*</p>
            <UploadEventInputBar hintText='Street address, city, state, zip code' value={address} onChange={setAddress} />

            <button
                onClick={modelData}
                className='w-full bg-tertiaryNavBarBackground py-3.5 font-semibold leading-[1.05rem] text-sm text-white rounded-[.625rem] cursor-pointer'
            >
                Post event
            </button>
        </main>
    )
}

export default Page