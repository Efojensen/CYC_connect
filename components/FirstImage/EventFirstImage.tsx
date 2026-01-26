import Image from 'next/image'

interface EventFirstImageProps {
    title: string
    imgUrl: string
    description: string
}

const EventFirstImage: React.FC<EventFirstImageProps> = ({ imgUrl, title, description }) => {
    return (
        <div className='flex flex-col-reverse relative w-full h-49.5 md:h-145 md:rounded-[.875rem]'>
            <Image
                src={imgUrl}
                width={390}
                height={198}
                unoptimized
                alt='event image'
                sizes="(min-width: 768px) 64vw, 100vw"
                className='object-cover relative w-full h-full md:rounded-[.875rem]'
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-linear-to-t from-black via-[rgba(0,0,0,0.55)] to-transparent to-53.96%' />

            {/* Text content */}
            <div className='flex flex-col absolute mb-3 md:mb-12.75 w-[87%] md:w-[64%] ml-4 md:ml-[76px]'>
                <h4 className='lora-font text-mainNavTileActive text-[1rem] md:text-[2.25rem] font-medium capitalize mb-2'>{title}</h4>
                <p className='inter-font text-white text-ellipsis text-[.75rem] md:text-[1.125rem] leading-4.5 md:leading-8.5 tracking-[.0156rem] line-clamp-3 md:line-clamp-5'>{description}</p>
            </div>
        </div>
    )
}

export default EventFirstImage