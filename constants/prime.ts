import type { CreativeCardProps, EventDetailsTileProps, InfoTileProps, SpeakerTileProps } from "@declarations/types";

export const events: InfoTileProps[] = [
    {
        id: '1',
        title: 'Easter Sunday Celebration',
        alt: 'Easter Mass with beautiful floral arrangements and congregation',
        imgUrl: '/images/1.png',
        previewContent: 'Join us for our joyful Easter Sunday Mass celebrating the resurrection of Jesus Christ with special music, flowers, and fellowship.'
    },
    {
        id: '1',
        title: 'Christmas Midnight Mass',
        alt: 'Christmas Eve service with candlelight and nativity scene',
        imgUrl: '/images/2.png',
        previewContent: 'Experience the beauty of Christmas with our traditional Midnight Mass featuring choir performances and the blessing of the nativity.'
    },
    {
        id: '1',
        title: 'First Communion Ceremony',
        alt: 'Children receiving First Holy Communion in white dresses and suits',
        imgUrl: '/images/3.png',
        previewContent: 'Witness our young parishioners receive the Sacrament of First Holy Communion in this special ceremony filled with faith and tradition.'
    },
    {
        id: '1',
        title: 'Lenten Retreat',
        alt: 'Prayer gathering during Lenten season with cross and candles',
        imgUrl: '/images/4.png',
        previewContent: 'Deepen your spiritual journey this Lent with our annual retreat focusing on prayer, fasting, and alms giving in preparation for Easter.'
    }
]

export const formations: InfoTileProps[] = [
    {
        id: "2",
        title: 'RCIA Program',
        alt: 'Group of adults participating in RCIA classes',
        imgUrl: '/images/5.jpg',
        previewContent: 'Join our Rite of Christian Initiation for Adults to learn about Catholic faith and prepare for sacraments of initiation.'
    },
    {
        id: "2",
        title: 'Bible Study Series',
        alt: 'Small group studying the Bible together',
        imgUrl: '/images/6.jpg',
        previewContent: 'Deepen your understanding of Scripture through our weekly Bible study exploring the Gospels and Church teachings.'
    },
    {
        id: "2",
        title: 'Marriage Preparation',
        alt: 'Engaged couple meeting with priest for marriage preparation',
        imgUrl: '/images/7.jpg',
        previewContent: 'Prepare for the sacrament of Matrimony with our comprehensive marriage preparation program and FOCCUS inventory.'
    },
    {
        id: "2",
        title: 'Youth Catechism',
        alt: 'Teenagers learning catechism in classroom setting',
        imgUrl: '/images/8.jpg',
        previewContent: 'Youth faith formation program teaching Catholic doctrine and helping young people grow in their relationship with Christ.'
    }
]

export const stories: InfoTileProps[] = [
    {
        id: '3',
        alt: "Saint Therese of Lisieux holding roses",
        title: "The Little Way of St. Therese",
        imgUrl: "/images/9.png",
        previewContent: "Discover the profound spirituality of 'The Little Way' - how small acts of love and sacrifice can lead to great holiness...",
        authorInfo: {
            date: new Date("2024-01-15"),
            name: "Fr. Michael O'Connor",
            profileImg: "/images/profile_images/1st.jpeg"
        }
    },
    {
        id: '3',
        alt: "Ancient Catholic manuscript",
        title: "Understanding Vatican II",
        imgUrl: "/images/10.png",
        previewContent: "A comprehensive look at the Second Vatican Council and its lasting impact on the modern Catholic Church...",
        authorInfo: {
            date: new Date("2024-01-10"),
            name: "Dr. Maria Gonzalez",
            profileImg: "/images/profile_images/2nd.jpeg"
        }
    },
    {
        id: '3',
        alt: "St. Francis of Assisi with animals",
        title: "Franciscan Spirituality Today",
        imgUrl: "/images/11.png",
        previewContent: "How the teachings of St. Francis of Assisi remain relevant in our modern world and ecological challenges...",
        authorInfo: {
            date: new Date("2024-01-08"),
            name: "Br. Thomas Aquinas",
            profileImg: "/images/profile_images/3rd.jpeg"
        }
    },
    {
        id: '3',
        alt: "Pope John Paul II with youth",
        title: "JPII and the New Evangelization",
        imgUrl: "/images/12.png",
        previewContent: "How Pope John Paul II's teachings continue to inspire young Catholics in the 21st century...",
        authorInfo: {
            date: new Date("2024-01-05"),
            name: "Sr. Maria Faustina",
            profileImg: "/images/profile_images/4th.jpeg"
        }
    },
];

export const creativeCardsInfo: CreativeCardProps[] = [
    {
        src: "/images/creativeCard/creative_1.png",
        alt: "Abstract geometric art with vibrant colors",
        title: "Geometric Harmony",
        views: 1247,
        likes: 892
    },
    {
        src: "/images/creativeCard/creative_2.png",
        alt: "Digital landscape with surreal elements",
        title: "Dreamscape Realms",
        views: 183,
        likes: 70
    },
    {
        src: "/images/creativeCard/creative_3.png",
        alt: "Minimalist character design illustration",
        title: "Character Studies",
        views: 1201,
        likes: 911
    },
    {
        src: "/images/creativeCard/creative_4.png",
        alt: "Typography and graphic design fusion",
        title: "Type Fusion",
        views: 90,
        likes: 23
    },
];

export const desc = `Lorem ipsum dolor sit amet consectetur. Curabitur nec eget vel ullamcorper nec et lorem. Fermentum sed velit rhoncus faucibus sem ullamcorper molestie duis sit. Et in lorem lorem pretium ut eget consequat euismod. Aenean egestas sed gravida sed.
Augue sapien odio in pellentesque maecenas suspendisse facilisis. Neque sed vulputate augue integer vulputate ullamcorper lorem rhoncus. Cursus nisi purus tellus etiam faucibus in leo blandit at. Sed pretium facilisis mauris pulvinar ac.`

export const superLongText = `Lorem ipsum dolor sit amet consectetur. Curabitur nec eget vel ullamcorper nec et lorem. Fermentum sed velit rhoncus faucibus sem ullamcorper molestie duis sit. Et in lorem lorem pretium ut eget consequat euismod. Aenean egestas sed gravida sed.
Augue sapien odio in pellentesque maecenas suspendisse facilisis. Neque sed vulputate augue integer vulputate ullamcorper lorem rhoncus. Cursus nisi purus tellus etiam faucibus in leo blandit at. Sed pretium facilisis mauris pulvinar ac.
Lorem ipsum dolor sit amet consectetur. Curabitur nec eget vel ullamcorper nec et lorem. Fermentum sed velit rhoncus faucibus sem ullamcorper molestie duis sit. Et in lorem lorem pretium ut eget consequat euismod. Aenean egestas sed gravida sed.
Augue sapien odio in pellentesque maecenas suspendisse facilisis. Neque sed vulputate augue integer vulputate ullamcorper lorem rhoncus. Cursus nisi purus tellus etiam faucibus in leo blandit at. Sed pretium facilisis mauris pulvinar ac.`

export const speakers: SpeakerTileProps[] = [
    {
        "name": "Alice Johnson",
        "number": "+1-555-123-4567",
        "imgUrl": "/images/speakers/1.png",
        "mail": "alice.johnson@example.com",
        "about": "Frontend developer with a passion for accessible web design.",
    },
    {
        "name": "Brian Smith",
        "number": "+1-555-987-6543",
        "mail": "brian.smith@example.com",
        "imgUrl": "/images/speakers/2.png",
        "about": "Cloud engineer specializing in scalable backend systems.",
    },
    {
        "name": "Clara Lee",
        "number": "+1-555-456-7890",
        "mail": "clara.lee@example.com",
        "imgUrl": "/images/speakers/3.png",
        "about": "UX designer focused on user-centered product experiences.",
    }
]

export const mockEvents: EventDetailsTileProps[] = [
    {
        date: new Date("2026-11-15"),
        time: "10:30 AM",
        location: "Main Auditorium",
        title: "Introduction to TypeScript",
        speaker: "Alex Johnson",
    },
    {
        date: new Date("2026-10-16"),
        time: "2:00 PM",
        location: "Room 204",
        title: "Modern Frontend with React",
        speaker: "Jamie Lee",
    },
    {
        date: new Date("2026-09-15"),
        time: "10:30 AM",
        location: "Main Auditorium",
        title: "Introduction to TypeScript",
        speaker: "Alex Johnson",
    }
];

