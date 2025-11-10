import Image from 'next/image'

const TertiaryNavBar = () => {
    return (
        <aside className='tertiaryNavBar'>
            <div className='flex gap-3 items-center'>
                <Image
                    width={24}
                    height={24}
                    alt='home icon'
                    src='/svgs/home.svg'
                />
                <Image
                    width={8.17}
                    height={4.08}
                    src='/svgs/nav_arrow.svg'
                    alt='points to current route'
                />
                <p className='text-[1rem] text-mainNavTileActive capitalize poppins-font'>Home</p>
            </div>
        </aside>
    )
}

export default TertiaryNavBar