import Image from "next/image"
import LinkBlock from "./LinkBlock"
import SocialLink from "./SocialLink"
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
            </div>

        </footer>
    )
}

export default Footer