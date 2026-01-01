import Image from 'next/image';
import InfoTile from '@components/InfoTile';
import SectionTitle from '@components/SectionTitle';
import CreativeCard from '@components/CreativeCard';
import FirstImage from '@components/FirstImage/FirstImage';
import { creativeCardsInfo, events, formations, stories } from '@constants/prime';

export default function Home() {
  return (
    <main className='flex flex-col mt-17.5 px-27 items-center'>
      {/* The first large image */}
      <FirstImage
        image='/images/coliseum.png'
        title='Leadership Summit 2025'
        month='August'
        author='PAX Headquarters'
        date={new Date}
      />

      <section className='flex flex-col w-full'>
        <SectionTitle title='Events' />
        <div className='flex gap-6'>
          {
            events.map((event, index) => (
              <InfoTile
                key={index}
                id={event.id}
                alt={event.alt}
                title={event.title}
                imgUrl={event.imgUrl}
                previewContent={event.previewContent}
              />
            ))
          }
        </div>
      </section>

      <section className='flex flex-col w-full my-38'>
        <SectionTitle title='Formations' />
        <div className='flex gap-6'>
          {
            formations.map((formation, index) => (
              <InfoTile
                key={index}
                id={formation.id}
                alt={formation.alt}
                title={formation.title}
                imgUrl={formation.imgUrl}
                previewContent={formation.previewContent}
              />
            ))
          }
        </div>
      </section>

      <section className='flex flex-col relative w-screen px-27 h-111.25 md:h-166.5 bg-specialBlueColoredSection pt-27.75'>
        <Image
          width={280}
          height={287}
          src='/svgs/rands.svg'
          alt='random cute images'
          className='absolute top-0 z-0 right-0 pointer-events-none hidden md:flex'
        />
        <Image
          width={280}
          height={220}
          src='/svgs/rands_2.svg'
          alt='random cute images again'
          className='absolute bottom-0 z-0 left-0 pointer-events-none hidden md:flex'
        />
        <SectionTitle
          title='Stories'
          className='relative z-10'
        />
        <div className='flex gap-x-6 z-1'>
          {
            stories.map((story, index) => (
              <InfoTile
                key={index}
                id={story.id}
                alt={story.alt}
                title={story.title}
                imgUrl={story.imgUrl}
                authorInfo={story.authorInfo}
                previewContent={story.previewContent}
              />
            ))
          }
        </div>
      </section>

      <section className='flex flex-col w-full my-17.5'>
        <SectionTitle title='Creative Space' />
        <div className='flex gap-6'>
          {
            creativeCardsInfo.map((creativeCardInfo, index) => (
              <CreativeCard
                key={index}
                src={creativeCardInfo.src}
                alt={creativeCardInfo.alt}
                likes={creativeCardInfo.likes}
                title={creativeCardInfo.title}
                views={creativeCardInfo.views}
              />
            ))
          }
        </div>
      </section>
    </main>
  );
}
