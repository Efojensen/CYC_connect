import Image from 'next/image'

export interface InfoTileProps {
    alt: string
    title: string
    imgUrl: string
    previewContent: string
    authorInfo?: AuthorInfo
}

interface AuthorInfo {
    date: Date
    name: string
    profileImg: string
}

const InfoTile: React.FC<InfoTileProps> = ({ title, imgUrl, previewContent, alt, authorInfo }) => {
    return (
        <div className='flex flex-col rounded-xl shadow-[0_0_32px_0_rgba(0,0,0,0.07)] bg-white'>
            <Image
                alt={alt}
                width={360}
                height={200}
                src={imgUrl}
                className='rounded-t-xl mb-4 h-50'
            />

            <div className='flex flex-col px-4 mb-4'>
                <h5 className='capitalize font-medium text-[1rem] lora-font text-sectionTitleColor text-ellipsis mb-4'>{title}</h5>
                <p className='text-sm leading-5 capitalize tracking-[.0156rem] inter-font text-ellipsis text-[#3e3232] opacity-75 line-clamp-2'>{previewContent}</p>
            </div>

            {
                authorInfo && (
                    <div className='flex px-4 py-3.25 justify-between w-full h-18'>
                        <div className='flex gap-x-2.5'>
                            <Image
                                width={44}
                                height={44}
                                alt='author profile image'
                                src={authorInfo.profileImg}
                            />
                            <div className='flex flex-col gap-y-1'>
                                <p className='text-sectionTitleColor font-medium leading-5 capitalize text-[.8125rem] lora-font'>{authorInfo.name}</p>
                                <p className='inter-font text-[.875rem] font-medium leading-5 capitalize text-sectionTitleColor opacity-75'>
                                    {
                                        authorInfo.date.toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                        <Image
                            width={20}
                            height={20}
                            alt='save/bookmark'
                            src='/svgs/save.svg'
                            className='hover:cursor-pointer'
                        />
                    </div>
                )
            }
        </div>
    )
}

export default InfoTile