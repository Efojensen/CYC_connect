export interface CreativeCardProps {
    src: string
    alt: string
    title: string
    views: number
    likes: number
}

export interface EventDetailsTileProps {
    date: Date
    time: string
    location: string
    title?: string
    speaker?: string
}

export interface InfoTileProps {
    id: string
    title: string
    imgUrl: string
    previewContent: string
    authorInfo?: AuthorInfo
}

interface AuthorInfo {
    date: Date
    name: string
    profileImg: string
}

export interface SpeakerTileProps {
    name: string
    mail: string
    about: string
    imgUrl: string
    number: string
}

export interface FooterLink {
    href: string
    text: string
}

export interface EventItem {
    id: string
    title: string
    category: string
    objectName: string
    preAuthReq: string
    description: string
}
