import Image from 'next/image'

export interface CreativeCardProps {
    src: string
    alt: string
    title: string
    views: number
    likes: number
}

const CreativeCard: React.FC<CreativeCardProps> = ({ src, alt, title, views, likes }) => {
    const displayedNumber = (num: number) => (num/1000).toFixed(1)

    return (
        <div className='creativeCard'>
            <Image
                alt={alt}
                src={src}
                width={340}
                height={214}
                className='rounded-md'
            />

            <p className='lora-font my-4 text-[1rem] font-medium capitalize text-ellipsis text-sectionTitleColor'>{title}</p>

            <div className='flex justify-between py-3.25 px-4 rounded-xl items-center bg-authorSectionColor'>
                <div className='flex gap-1.5'>
                    {/* First part */}
                    <div className='flex gap-1.5 items-center'>
                        <Image
                            width={20}
                            height={19}
                            alt='number of views'
                            src='/svgs/creativeCard/views.svg'
                            className='hover:cursor-pointer'
                        />
                        <p className='roboto-font font-medium leading-5.5 tracking-[.0063rem] mr-4'>{
                            views >= 1000 ? `${displayedNumber(views)}k` : `${views}`
                        }</p>

                        <Image
                            width={20}
                            height={19}
                            alt='number of likes'
                            src='/svgs/creativeCard/fav.svg'
                            className='hover:cursor-pointer'
                        />
                        <p className='roboto-font font-medium leading-5.5 tracking-[.0063rem]'>{likes}</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <Image
                        width={20}
                        height={19}
                        alt='edit?'
                        src='/svgs/creativeCard/edit.svg'
                        className='hover:cursor-pointer'
                    />
                    <Image
                        width={20}
                        height={19}
                        alt='delete'
                        src='/svgs/creativeCard/delete.svg'
                        className='hover:cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default CreativeCard