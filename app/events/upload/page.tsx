import Image from 'next/image'
import UploadEventInputBar from '@components/upload/input'

const page = () => {
    return (
        <main className='mt-52 px-91'>
            <p className='text-sm leading-3.5 tracking-[-0.0175rem] font-medium dmSans-font mb-1.75'>Event Title*</p>
            <UploadEventInputBar hintText='Leadership Summit 2025'/>

            <div className='flex flex-col w-full h-175 py-29.25 px-81.25 items-center justify-center gap-2.5 border border-dashed border-tertiaryNavBarBackground mt-17.5'>
                <Image
                    width={27.19}
                    height={29.33}
                    alt='upload image'
                    src='/svgs/upload.svg'
                />
                <div className='flex flex-col items-center'>
                    <p className='dmSans-font text-[1rem] font-medium leading-6 text-[#181D27]'>Browse through files</p>
                    <p className='text-[#6C606C] dmSans-font text-sm leading-5'>Format: .jpeg, .png & Max file size: 25 MB</p>
                </div>
                <button className='py-1 px-4 flex items-center rounded-lg bg-tertiaryNavBarBackground text-white'>
                    Browse files
                </button>
            </div>
        </main>
    )
}

export default page