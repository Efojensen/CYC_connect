import Image from 'next/image'

export interface InfoTileProps {
    alt: string
    title: string
    imgUrl: string
    previewContent: string
}

const InfoTile:React.FC<InfoTileProps> = ({ title, imgUrl, previewContent, alt }) => {
    return (
        <div className='flex flex-col'>
            <Image
                alt={alt}
                width={360}
                height={200}
                src={imgUrl}
                className='rounded-t-2xl mb-4'
            />

            <div className='flex flex-col px-4'>
                <h5 className='capitalize font-medium text-[1rem] lora-font text-sectionTitleColor text-ellipsis mb-4'>{title}</h5>
                <p className='text-sm leading-5 capitalize tracking-[.0156rem] inter-font text-ellipsis text-[rgba(62, 50, 50, 0.75)]'>{previewContent}</p>
            </div>
        </div>
    )
}

export default InfoTile