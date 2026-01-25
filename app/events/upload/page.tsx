'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { UploadEventInputBar } from '@components/input'

const Page = () => {
    const [date, setDate] = useState('')
    const [city, setCity] = useState('')
    const [venue, setVenue] = useState('')
    const [about, setAbout] = useState('')
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [duration, setDuration] = useState('')
    const [startTime, setStartTime] = useState('')
    const [description, setDescription] = useState('')
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [imageFile, setImageFile] = useState<File | null>(null)

    // ⬇️ ADDED: open file picker
    const openFileDialog = () => {
        fileInputRef.current?.click()
    }

    const url = process.env["NEXT_PUBLIC_MASTER"]

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        // File size validation (25MB)
        if (file.size > 25 * 1024 * 1024) {
            alert('File must be under 25MB')
            return
        }

        setImageFile(file)
    }

    const toDateTime = (date: string, time: string): Date | null => {
        if (!date || !time) return null

        // ISO-8601 safe format
        return new Date(`${date}T${time}`)
    }


    const uploadEventDetails = async () => {
        const formData = new FormData()

        const eventData = {
            title: title,
            description: description,
            about: about,
            dateAndTime: {
                duration: duration,
                startDateTime: toDateTime(date, startTime),
            },
            location: {
                venue: venue,
                address: address,
                city: city
            }
        }
        formData.append('event', JSON.stringify(eventData))
        if (imageFile) {
            formData.append('image', imageFile)
        }

        const token = localStorage.getItem('auth_token')

        try {
            const res = await fetch(`${url}events/new`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            })

            if (!res.ok) {
                alert('something went wrong')
            }
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }

    return (
        <main className='md:mt-52 mt-12 px-2 md:px-91'>
            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 text-eventUploadTextColor'>
                Event Title*
            </p>

            <UploadEventInputBar
                hintText='Leadership Summit 2025'
                value={title}
                onChange={setTitle}
            />

            <div className='flex flex-col w-full h-65 md:h-134.75 md:py-29.25 md:px-81.25 items-center justify-center gap-2.5 border border-dashed border-tertiaryNavBarBackground mt-17.5'>
                <Image
                    width={27.19}
                    height={29.33}
                    alt='upload image'
                    src='/svgs/upload_pic.svg'
                />

                <div className='flex flex-col items-center w-full'>
                    <p className='dmSans-font text-[1rem] font-medium leading-6 text-[#181D27]'>
                        Browse through files
                    </p>
                    <p className='text-[#6C606C] dmSans-font text-sm leading-5'>
                        Format: .jpeg, .png & Max file size: 25 MB
                    </p>
                </div>

                <input
                    ref={fileInputRef}
                    type='file'
                    accept='image/jpeg,image/png'
                    onChange={handleFileChange}
                    className='hidden'
                />

                <button
                    type='button'
                    onClick={openFileDialog}
                    className='py-1 px-4 flex items-center rounded-lg bg-tertiaryNavBarBackground text-white hover:cursor-pointer'
                >
                    Browse files
                </button>

                {imageFile && (
                    <p className='text-xs text-gray-600 mt-2'>
                        Selected: {imageFile.name}
                    </p>
                )}
            </div>

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>
                Description*
            </p>

            <div className='flex flex-column w-full border-2 border-tertiaryNavBarBackground h-65 md:h-14.75'>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Enter in the description of the event'
                    className='w-full focus:outline-none mt-1 pl-2'
                />
            </div>

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>
                About*
            </p>
            <div className='flex flex-column w-full border-2 border-tertiaryNavBarBackground h-65 md:h-24.75'>
                <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder='Mention some details about the event'
                    className='w-full focus:outline-none mt-1 pl-2'
                />
            </div>

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>
                Date & Time*
            </p>

            <div className='flex gap-3 w-full items-center'>
                <UploadEventInputBar
                    hintText='Choose a date'
                    type='date'
                    value={date}
                    onChangeDate={setDate}
                />
                <UploadEventInputBar
                    hintText='05:30 AM'
                    type='time'
                    value={startTime}
                    onChangeDate={setStartTime}
                />
            </div>

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>
                Duration
            </p>
            <UploadEventInputBar
                hintText='2 days'
                value={duration}
                onChangeDate={setDuration}
            />

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>
                Address & City*
            </p>

            <div className='flex gap-3 w-full items-center'>
                <UploadEventInputBar
                    hintText='425 Lake Road'
                    value={address}
                    onChange={setAddress}
                />
                <UploadEventInputBar
                    hintText='Kumasi'
                    value={city}
                    onChange={setCity}
                />
            </div>

            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75 mt-20 text-eventUploadTextColor'>Venue</p>
            <UploadEventInputBar
                hintText='Tema Comm. 1 OLAM'
                value={venue}
                onChange={setVenue}
            />

            <button
                onClick={uploadEventDetails}
                className='w-full bg-tertiaryNavBarBackground py-3.5 font-semibold leading-[1.05rem] text-sm text-white rounded-[.625rem] cursor-pointer mt-12'
            >
                Post event
            </button>
        </main>
    )
}

export default Page
