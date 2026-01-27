import SpeakerTile from '@components/SpeakerTile'
import { EventDetails } from '@declarations/types'
import SectionTitle from '@components/SectionTitle'
import EventDetailsTile from '@components/EventDetailsTile'
import OtherEventTile from '@components/otherEvent/OtherEventTile'
import EventFirstImage from '@components/FirstImage/EventFirstImage'
import { mockEvents, speakers, } from '@constants/prime'

interface EventDetailsPageProps {
    params: { id: number }
}

export default async function EventDetailsPage({
    params,
}: EventDetailsPageProps) {
    const url = process.env['NEXT_PUBLIC_MASTER']

    const resolvedParams = await params;
    const id = resolvedParams.id

    const res = await fetch(`${url}events/${id}`)
    const eventDetailsRaw: EventDetails = await res.json()
    const eventDetails: EventDetails = {
        ...eventDetailsRaw,
        dateAndTime: {
            duration: eventDetailsRaw.dateAndTime.duration,
            startDateTime: new Date(eventDetailsRaw.dateAndTime.startDateTime)
        }
    }

    return (
        <main className='mt-11 md:mt-34.25 px-5 md:px-27'>
            <EventFirstImage
                title={eventDetails.title}
                imgUrl={eventDetails.preAuthReq ?? '/images/cathedral.png'}
                description={eventDetails.description}
            />
            <h2 className='text-center lora-font text-[2.25rem] font-medium capitalize text-tertiaryNavBarBackground mb-2 md:text-start mt-12.5 md:mt-32.5'>about event</h2>
            <div className='flex flex-col md:flex-row md:justify-between md:mb-22.25'>
                <p className='inter-font text-[1rem] md:text-2xl leading-7 md:leading-8 text-black mb-12.5 md:w-[57%]'>{eventDetails.about}</p>
                <EventDetailsTile
                    time={eventDetails.dateAndTime.duration}
                    date={eventDetails.dateAndTime.startDateTime}
                    location={`${eventDetails.location.address}, ${eventDetails.location.venue}`}
                    speaker='Fr. Evans Halolo'
                />
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                {/* Speakers section */}
                <section className='mt-12.5 md:mt-0'>
                    <h3 className='text-tertiaryNavBarBackground text-4xl lora-font uppercase text-center md:text-start mb-8.75'>speakers</h3>
                    <div className='flex flex-col md:gap-y-23'>
                        {speakers.map((speakers, index) => (
                            <SpeakerTile
                                key={index}
                                name={speakers.name}
                                mail={speakers.mail}
                                about={speakers.about}
                                imgUrl={speakers.imgUrl}
                                number={speakers.number}
                            />
                        ))}
                    </div>
                </section>
                {/* Other Events section */}
                <section className='flex flex-col mt-12.5 md:mt-0'>
                    <SectionTitle title='Other Events' />
                    <div className='flex flex-col gap-10 md:gap-20'>
                        {mockEvents.map((other, index) => (
                            <OtherEventTile
                                key={index}
                                date={other.date}
                                time={other.time}
                                title={other.title}
                                speaker={other.speaker}
                                location={other.location}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}