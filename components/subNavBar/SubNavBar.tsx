import Image from "next/image"
import SubNavBarTile from "./SubNavBarTile"

const SubNavBar = () => {
    return (
        <aside className='subNavBar'>
            <div className='flex gap-8'>
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
                    label='Creative Space'
                    items={[
                        'Faith based art',
                        'Ancient art',
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
            </div>

            <div className='flex gap-2 items-center'>
                <Image
                    width={24}
                    height={24}
                    alt='profile image'
                    src='/svgs/empty-profile.svg'
                />
                <p className='text-[.875rem] inter-font leading-5.5 text-white'>Account</p>
            </div>
        </aside>
    )
}

export default SubNavBar