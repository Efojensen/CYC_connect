import Image from 'next/image'

interface EventFirstImageProps {
    date: Date
    image: string
}

const EventFirstImage: React.FC<EventFirstImageProps> = ({ image }) => {
    return (
        <div className={`flex flex-col relative items-center mb-17.5 w-screen`}>
            {/* Image Container */}
            <div className='relative w-full'>
                <Image
                    src={image}
                    width={1512}
                    height={500}
                    alt='event picture'
                    className='w-full aspect-1512/530 object-cover'
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-linear-to-t from-black via-[rgba(0,0,0,0.55)] to-transparent to-53.96%'/>
            </div>

            <div className='flex flex-col absolute w-full items-center bottom-0 mb-20'>
                
            </div>
        </div>
    )
}

export default EventFirstImage