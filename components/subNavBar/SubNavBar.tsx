import Image from "next/image"
import SubNavBarTile from "./SubNavBarTile"

const SubNavBar = () => {
    return (
        <aside className='subNavBar'>
            <div className='flex gap-8'>
                <SubNavBarTile
                    label='Reflections'
                />
                <SubNavBarTile
                    label='Stories'
                />
                <SubNavBarTile
                    label='Formation'
                />
                <SubNavBarTile
                    label='Creative Space'
                />
                <SubNavBarTile
                    label='Education'
                />
                <SubNavBarTile
                    label='Newsletter'
                />
                <SubNavBarTile
                    label='Events'
                />
            </div>

            <div className='flex gap-2'>
                <Image
                    width={24}
                    height={24}
                    alt='profile image'
                    src='/svgs/empty-profile.svg'
                />
                <p className='text-[.875rem] inter-font leading-5.5'>Account</p>
            </div>
        </aside>
    )
}

export default SubNavBar