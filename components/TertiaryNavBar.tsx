import Image from 'next/image'

const TertiaryNavBar = () => {
    return (
        <aside className='flex'>
            <div className='hidden md:flex gap-3 items-center w-full py-12 pl-75 bg-tertiaryNavBarBackground'>
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

            {/* Mobile View */}
            <div className='flex md:hidden mt-4.25 items-center gap-1 mx-9'>
                <span>Home</span>
                <Image
                    width={8.17}
                    height={4.08}
                    src='/svgs/mobile_nav_arrow.svg'
                    alt='points to current route'
                />
                <span>Events</span>
                <Image
                    width={8.17}
                    height={4.08}
                    src='/svgs/mobile_nav_arrow.svg'
                    alt='points to current route'
                />
                <span>Event Details</span>
            </div>
        </aside>
    )
}

export default TertiaryNavBar