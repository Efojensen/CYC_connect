import Link from 'next/link'

interface mainNavTileProps {
    href: string
    label: string
    active: boolean
}

const MainNavTile: React.FC<mainNavTileProps> = ({ href, label, active }) => {
    return (
        <Link
            href={href}
            className={`text-[1.3125rem] leading-[1.9688rem] text-center loto-font ${active && 'text-mainNavTileActive'}`}
        >
            {label}
        </Link>
    )
}

export default MainNavTile