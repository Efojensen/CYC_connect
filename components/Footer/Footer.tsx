import Link from "next/link"
import Image from "next/image"
import InputBar from "./InputBar"
import LinkBlock from "./LinkBlock"
import SocialLink from "./SocialLink"
import { WhiteFilledRoundedButton } from "@components/Buttons"
import { pageLinks_1, pageLinks_2, pageLinks_3, socialLinks } from "./constants"

const Footer = () => {
    return (
        <footer className='footer'>

            <div className='flex justify-between'>
                <div className='flex flex-col w-106 items-start'>
                    <Image
                        width={100}
                        height={100}
                        src='/images/logo.png'
                        alt='Ghana CYC Connect Logo'
                        className='mb-5'
                    />

                    <p className='text-footerTextColor inter-font text-sm leading-5.5 tracking-[-0.0088rem] text-justify mb-6.5'>Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.</p>

                    <div className='flex gap-3'>
                        {socialLinks.map((socialLink, index) => (
                            <SocialLink
                                key={index}
                                src={socialLink.src}
                                alt={socialLink.alt}
                                href={socialLink.href}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex mt-23.5 gap-6'>
                    <LinkBlock
                        title='ghana cyc'
                        links={pageLinks_1}
                    />
                    <LinkBlock
                        title='quick links'
                        links={pageLinks_2}
                    />
                    <LinkBlock
                        title='legal & support'
                        links={pageLinks_3}
                    />
                </div>

                <div className='flex flex-col mt-20'>
                    <p className='text-[2rem] text-white dancing_script-font mb-2.5'>Our Newsletter</p>
                    <InputBar placeholder={'Email Address'}/>
                    <div className='flex mt-3.75 gap-4.25'>
                        <InputBar placeholder={'First Name'}/>
                        <WhiteFilledRoundedButton label='Sign Up'/>
                    </div>
                </div>
            </div>

            <hr className='w-full mt-20.5 h-[.0313rem] text-[#999999]'/>

            <div className='flex mt-4 ml-8.25'>
                <p className='text-sm tracking-[-0.0262rem] inter-font text-white mr-36.25'>2025 © Company Ltd. All rights reserved.</p>
                <div className='flex gap-12.5'>
                    <Link
                        href='terms-conditions'
                        className='italic font-extralight text-sm text-[#999999] tracking-[-0.0262rem] capitalize'
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        href='terms-conditions'
                        className='italic font-extralight text-sm text-[#999999] tracking-[-0.0262rem] capitalize'
                    >
                        privacy policy
                    </Link>
                    <Link
                        href='terms-conditions'
                        className='italic font-extralight text-sm text-[#999999] tracking-[-0.0262rem] capitalize'
                    >
                        security
                    </Link>
                    <Link
                        href='terms-conditions'
                        className='italic font-extralight text-sm text-[#999999] tracking-[-0.0262rem] capitalize'
                    >
                        cookie consent
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer