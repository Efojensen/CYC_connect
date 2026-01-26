import Image from 'next/image';
import InfoTile from '@components/InfoTile';
import SectionTitle from '@components/SectionTitle';
import CreativeCard from '@components/CreativeCard';
import FirstImage from '@components/FirstImage/FirstImage';
import { creativeCardsInfo, formations, stories } from '@constants/prime';
import { EventItem } from '@declarations/types';

export default async function Home() {
  const url = process.env['NEXT_PUBLIC_MASTER']

  const res = await fetch(`${url}events`)
  const cloudEvents: EventItem[] = await res.json()

  return (
    <main className='flex flex-col mt-17.5 px-5 sm:px-13 md:px-27 items-center'>
      {/* The first large image */}
      <FirstImage
        image='/images/coliseum.png'
        title='Leadership Summit 2025'
        month='August'
        author='PAX Headquarters'
        date={new Date}
      />

      <section className="flex flex-col w-full">
        <SectionTitle title="Events" />
        <div className="relative -mx-5 sm:-mx-13 md:mx-0">
          <div className="flex gap-6 px-5 sm:px-13 md:px-0 overflow-x-auto flex-nowrap no-scrollbar">
            {cloudEvents.map((event, index) => (
              <div key={index} className="shrink-0">
                <InfoTile
                  id={event.id}
                  title={event.title}
                  imgUrl={event.preAuthReq}
                  previewContent={event.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full my-38'>
        <SectionTitle title='Formations' />
        <div className='relative -mx-5 sm:-mx-13 md:mx-0'>
          <div className='flex gap-6 px-5 sm:px-13 md:px-0 overflow-x-auto flex-nowrap no-scrollbar'>
            {formations.map((formation, index) => (
              <div key={index} className='shrink-0'>
                <InfoTile {...formation} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='flex flex-col relative w-screen px-5.75 md:px-27 h-134.75 md:h-166.5 bg-specialBlueColoredSection pt-11.25 md:pt-27.75'>
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
        <div className='relative -mx-5 sm:-mx-13 md:mx-0'>
          <div className='flex gap-x-6 z-1 px-5 sm:px-13 md:px-0 overflow-x-auto flex-nowrap no-scrollbar'>
            {stories.map((story, index) => (
              <div key={index} className='shrink-0'>
                <InfoTile {...story} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full my-17.5'>
        <SectionTitle title='Creative Space' />
        <div className='relative -mx-5 sm:-mx-13 md:mx-0'>
          {/* overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap */}
          <div className='flex gap-6 px-5 sm:px-13 md:px-0 no-scrollbar overflow-x-auto flex-nowrap'>
            {creativeCardsInfo.map((creativeCardInfo, index) => (
              <div key={index}>
                <CreativeCard {...creativeCardInfo} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
