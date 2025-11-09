import Image from 'next/image'

const TertiaryNavBar = () => {
    return (
        <aside className='tertiaryNavBar'>
            <Image
                width={24}
                height={24}
                alt='home icon'
                src='/svgs/home.svg'
            />
        </aside>
    )
}

export default TertiaryNavBar