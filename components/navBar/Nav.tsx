import Image from 'next/image'
import SearchBar from './SearchBar'
import MainNavTile from './MainNavTile'
import { FilledButton, OutlinedButton } from '@components/Buttons'

const Nav = () => {
    return (
        <nav className='navBar'>
            <div className='flex items-center'>
                <Image
                    width={100}
                    height={100}
                    src='/images/logo.png'
                    alt='Ghana cyc connect logo'
                />

                <div className='flex gap-15'>
                    <MainNavTile href='/' label='HOME' active={true}/>
                    <MainNavTile href='/about' label='ABOUT' active={false}/>
                    <MainNavTile href='/help' label='HELP' active={false}/>
                    <MainNavTile href='/contact' label='CONTACT' active={false}/>
                </div>
            </div>

            <SearchBar/>

            <div className='flex gap-4'>
                <OutlinedButton
                    label='Log In'
                    className='py-4.25 px-7.5 rounded-sm'
                />
                <FilledButton
                    label='Get started'
                    className='py-4.25 px-7.5 rounded-[.3125rem]'
                />
            </div>
        </nav>
    )
}

export default Nav