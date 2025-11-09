import Link from 'next/link'
import Image from 'next/image'

const SocialLink = ({ src, alt, href }: { src: string, alt: string, href: string }) => {
    return (
        <Link
            href={href}
            className='flex size-11.5 p-3.5 bg-[#363B47] opacity-40 hover:cursor-pointer hover:opacity-100 hover:bg-mainNavTileActive active:animate-pulse'
        >
            <Image
                src={src}
                alt={alt}
                height={18}
                width={18}
                className='opacity-100'
            />
        </Link>
    )
}

export default SocialLink