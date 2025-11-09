import Image from 'next/image'

const MetaTile = ({icon, desc} : {icon: string, desc: string}) => {
    return (
        <div className='flex gap-1.25 items-center'>
            <Image
                src={icon}
                alt={icon}
                height={16}
                width={16.53}
            />
            <p className='text-[#BACCE1] text-sm font-medium leading-5 text-center inter-font'>{desc}</p>
        </div>
    )
}

export default MetaTile