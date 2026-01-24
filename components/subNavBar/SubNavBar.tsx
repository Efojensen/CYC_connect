import Image from "next/image"
import Link from "@node_modules/next/link"
import SubNavBarTile from "./SubNavBarTile"

const SubNavBar = () => {
    return (
        <aside className='subNavBar'>
            <div className='flex gap-8'>
                <SubNavBarTile
                    label='Reflections'
                    links={[

                    ]}
                />
                <SubNavBarTile
                    label='Stories'
                    items={[
                        'Youth in Action',
                        'Faith journeys',
                        'Diocesan Highlights'
                    ]}
                    links={[

                    ]}
                />
                <SubNavBarTile
                    label='Formation'
                    links={[

                    ]}
                />
                <SubNavBarTile
                    label='Creative Space'
                    items={[
                        'Faith based art',
                        'Ancient art',
                    ]}
                    links={[

                    ]}
                />
                <SubNavBarTile
                    label='Education'
                    items={[
                        'Leadership tips',
                        'Career guidance',
                        'Academic resources'
                    ]}
                    links={[

                    ]}
                />
                <SubNavBarTile
                    label='Newsletter'
                    items={[
                        'Youth Events Report',
                        'Letters from Ghanaian youth diaspora',
                        'Appointments, memorials and dedications'
                    ]}
                    links={[

                    ]}
                />
                <SubNavBarTile
                    label='Events'
                    items={[
                        'Upcoming Programs',
                        'National Calender',
                        'Diocesan calls for participation',
                        'Volunteer and Service opportunities'
                    ]}
                    links={[
                        '/events',
                        '/events/calender',
                        '/events/diocesan-calls',
                        '/events/volunteer'
                    ]}
                />
            </div>

            {
                <Link
                    href='/events/upload'
                    className='flex gap-2 items-center cursor-pointer'
                >
                    <Image
                        width={24}
                        height={24}
                        alt='profile image'
                        src='/svgs/upload.svg'
                        className='invert-0 brightness-200'
                    />
                    <p className='text-[.875rem] inter-font leading-5.5 text-white'>Upload event</p>
                </Link>}
        </aside>
    )
}

export default SubNavBar