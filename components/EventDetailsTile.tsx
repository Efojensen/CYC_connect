import Image from 'next/image'
import { EventDetailsTileProps } from '@declarations/types'

const EventDetailsTile: React.FC<EventDetailsTileProps> = ({ date, time, location, speaker }) => {
    return (
        <div className='flex flex-col bg-tertiaryNavBarBackground border border-[#57B8FF] rounded-[.875rem] py-12.75 px-6.75 md:px-9.25 gap-y-6.25 w-full md:w-[36%]'>
            <div className='flex items-center justify-center rounded-[.4375rem] border border-white bg-tertiaryNavBarBackground text-white poppins-font text-[20px] py-3.75'>Date & Time</div>
            <p className='poppins-font text-[1.125rem] text-white'>Event Details:</p>
            <div className='flex flex-col gap-6.75'>
                <div className='flex items-center'>
                    <Image
                        width={24}
                        height={24}
                        alt='calender'
                        src='/svgs/eventDetails/calender.svg'
                    />
                    <p className='lora-font text-[.8125rem] font-medium capitalize leading-5 ml-2 text-white'>
                        {date.toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                </div>
                <div className='flex items-center'>
                    <Image
                        width={24}
                        alt='clock'
                        height={24}
                        src='/svgs/eventDetails/clock.svg'
                    />
                    <p className='lora-font text-[.8125rem] font-medium capitalize leading-5 ml-2 text-white'>{time}</p>
                </div>
                <div className='flex items-center'>
                    <Image
                        alt='map'
                        width={24}
                        height={24}
                        src='/svgs/eventDetails/globe.svg'
                    />
                    <p className='lora-font text-[.8125rem] font-medium capitalize leading-5 ml-2 text-white'>{location}</p>
                </div>
                {speaker && <div className='flex items-center'>
                    <Image
                        width={24}
                        height={24}
                        alt='speaker'
                        src='/svgs/eventDetails/speaker.svg'
                    />
                    <p className='lora-font text-[.8125rem] font-medium capitalize leading-5 ml-2 text-white'>{speaker}</p>
                </div>}
            </div>
        </div>
    )
}

export default EventDetailsTile