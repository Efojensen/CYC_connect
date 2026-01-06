import Image from 'next/image'
import { SpeakerTileProps } from '@declarations/types'

const SpeakerTile:React.FC<SpeakerTileProps> = ({ name, mail, about, imgUrl, number }) => {
    return (
        <div className='flex flex-col md:flex-row gap-11.5'>
            <Image
                width={278}
                height={350}
                src={imgUrl}
                alt={`picture of ${name}`}
                className='w-87.5 md:w-69.5'
            />
            <div className='flex flex-col max-w-133 text-start'>
                <h5 className='lora-font md:text-[2.25rem] capitalize font-medium text-black mb-4.25'>{name}</h5>
                <p className='inter-font text-[1.125rem] leading-8.5 mb-6.75 md:line-clamp-5'>{about}</p>
                <p className='inter-font leading-7 text-[1.125rem]'>Contact Information</p>
                <ul>
                    <li className='inter-font leading-7 text-[1.125rem]'>{mail}</li>
                    <li className='inter-font leading-7 text-[1.125rem]'>{number}</li>
                </ul>
            </div>
        </div>
    )
}

export default SpeakerTile