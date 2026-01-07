import Image from 'next/image'
import MetaTile from './MetaTile'
import MonthTile from './MonthTile'

interface FirstImageProps {
    date: Date
    image: string
    month: string
    title: string
    author: string
    w_screen?: boolean
}

const FirstImage: React.FC<FirstImageProps> = ({ date, image, month, title, author, w_screen }) => {
    return (
        <div className={`flex flex-col relative items-center mb-17.5 ${w_screen && 'w-screen'}`}>
            {/* Image Container */}
            <div className='relative w-full'>
                <Image
                    src={image}
                    width={1512}
                    height={500}
                    alt='event picture'
                    className='w-full aspect-390/198 md:aspect-1512/530 object-cover'
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-linear-to-t from-black via-[rgba(0,0,0,0.55)] to-transparent to-53.96%'/>
            </div>

            <div className='flex flex-col absolute w-full items-center bottom-0 md:mb-20 mb-4.5'>
                <MonthTile month={month} />
                <p className='mt-[.8762rem] text-center lora-font text-[1rem] md:text-[2.5rem] font-medium text-white capitalize'>{title}</p>
                <div className='flex gap-x-3.75 md:mt-12.5'>
                    <MetaTile
                        desc={author}
                        icon='/svgs/firstImage/profile.svg'
                    />
                    <MetaTile
                        desc={date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                        icon='/svgs/firstImage/time.svg'
                    />
                    <MetaTile
                        desc='20 mins'
                        icon='/svgs/firstImage/profile.svg'
                    />
                </div>
            </div>
        </div>
    )
}

export default FirstImage