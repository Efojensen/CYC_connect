import EventDetailsTile from "@components/EventDetailsTile"
import EventFirstImage from "@components/FirstImage/EventFirstImage"
import SectionTitle from "@components/SectionTitle"
import SpeakerTile from "@components/SpeakerTile"
import { desc, speakers, superLongText } from "@constants/prime"

const EventDetailsPage = () => {
    return (
        <main className='mt-34.25 px-5 md:px-27'>
            <EventFirstImage
                title='Leadership Summit 2025'
                imgUrl='/images/cathedral.png'
                description={desc}
            />
            <h2 className='text-center lora-font text-[2.25rem] font-medium capitalize text-tertiaryNavBarBackground mb-2 md:text-start mt-12.5 md:mt-32.5'>about event</h2>
            <div className='flex flex-col md:flex-row md:justify-between md:mb-22.25'>
                <p className='inter-font text-[1rem] md:text-2xl leading-7 md:leading-8 text-black mb-12.5 md:w-[57%]'>{superLongText}</p>
                <EventDetailsTile
                    time='9am - 3pm'
                    date='November 7th 2025'
                    location='Cape Coast, Ridge Royal Hotel'
                    speaker='Fr. Evans Halolo'
                />
            </div>
            <div className='flex flex-col md:flex-row'>
                {/* Speakers section */}
                <section>
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
                <section className='flex flex-col'>
                    <SectionTitle title='Other Events'/>
                </section>
            </div>
        </main>
    )
}

export default EventDetailsPage