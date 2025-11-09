import Link from "@node_modules/next/link"

export interface FooterLink {
    href: string
    text: string
}

interface LinkBlockProps {
    title: string
    links: FooterLink[]
}

const LinkBlock:React.FC<LinkBlockProps> = ({ title, links }) => {
    return (
        <div className='flex flex-col min-w-50' >
            <h6 className='text-sm text-white font-medium lora-font leading-3.5 uppercase text-justify mb-5'>{title}</h6>
            {
                links.map((link, index) => (
                    <Link
                        href={link.href} key={index}
                        className='text-footerTextColor text-sm inter-font leading-5.5 tracking-[-0.0088rem] text-justify py-1.5 capitalize'
                    >
                        {link.text}
                    </Link>
                ))
            }
        </div>
    )
}

export default LinkBlock