import Image from 'next/image'
import SearchBar from './SearchBar'
import MainNavTile from './MainNavTile'
import { FilledButton, OutlinedButton } from '@components/Buttons'
import Link from '@node_modules/next/link'

const Nav = () => {
    return (
        <nav className='navBar'>
            <div className='flex items-center'>
                <Image
                    width={70}
                    height={70}
                    className='size-25'
                    src='/images/logo.png'
                    alt='Ghana cyc connect logo'
                />

                <div className='hidden md:flex gap-15'>
                    <MainNavTile href='/' label='HOME' active={true} />
                    <MainNavTile href='/about' label='ABOUT' active={false} />
                    <MainNavTile href='/help' label='HELP' active={false} />
                    <MainNavTile href='/contact' label='CONTACT' active={false} />
                </div>
            </div>

            <SearchBar />

            <div className='hidden md:flex gap-4'>
                <Link
                    href='/auth/login'
                >
                    <OutlinedButton
                        label='Log In'
                        className='md:py-4.25 md:px-7.5 rounded-sm'
                    />
                </Link>
                <Link
                    href='/auth/signUp'
                >
                    <FilledButton
                        label='Get started'
                        className='py-4.25 px-7.5 rounded-[.3125rem]'
                    />
                </Link>
            </div>

            <Image
                width={23}
                height={16}
                src='/svgs/hamburger.svg'
                alt='links to various pages'
                className='flex md:hidden hover:cursor-pointer mr-2.5'
            />
        </nav>
    )
}

export default Nav