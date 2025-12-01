import EventFirstImage from "@components/FirstImage/EventFirstImage"

const page = () => {
    return (
        <main className='flex flex-col px-5 md:px-36 items-center'>
            <EventFirstImage
                image='/images/cathedral.png'
                date={new Date}
            />

            <h2></h2>
        </main>
    )
}

export default page