import Image from 'next/image'
import CircleDate from "./CircleDate"
import { EventDetailsTileProps } from "@declarations/types"

const OtherEventTile:React.FC<EventDetailsTileProps> = ({ date, time, location, speaker, title }) => {
    return (
        <div className='flex flex-col md:flex-row'>
            <CircleDate receivedDate={date}/>
            <div className='flex flex-col md:ml-9'>
                <span className='flex gap-0.75 mb-3 items-center'>
                    <Image
                        width={24}
                        height={24}
                        alt='clock face'
                        src='/svgs/eventDetails/clock_black.svg'
                    />
                    <span>{time}</span>
                </span>
                <span className='lora-font text-4xl font-medium capitalize line-clamp-1 mb-10.5'>{title}</span>

                <span className='lora-font text-[1.25rem] font-medium leading-5 flex items-center gap-[3px]'>
                    <Image
                        width={24}
                        height={24}
                        alt='globe'
                        src='/svgs/eventDetails/globe_black.svg'
                    />
                    {location}
                </span>
                <span className='lora-font text-[1.25rem] font-medium leading-5 mb-3.75 flex items-center gap-0.75'>
                    <Image
                        width={24}
                        height={24}
                        alt='speaker'
                        src='/svgs/eventDetails/speaker_black.svg'
                    />
                    {speaker}
                </span>
            <button
                className='py-2.75 px-8.75 inter-font text-[1.25rem] w-full border rounded-[.3125rem] hover:cursor-pointer hover:bg-[#FEDA00AE]'
            >
                View Details
            </button>
            </div>
        </div>
    )
}

export default OtherEventTile