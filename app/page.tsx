import SectionTitle from "@components/SectionTitle";
import InfoTile, { InfoTileProps } from "@components/InfoTile";
import FirstImage from "@components/FirstImage/FirstImage";

const events: InfoTileProps[] = [
  {
    title: 'Easter Sunday Celebration',
    alt: 'Easter Mass with beautiful floral arrangements and congregation',
    imgUrl: '/images/1.png',
    previewContent: 'Join us for our joyful Easter Sunday Mass celebrating the resurrection of Jesus Christ with special music, flowers, and fellowship.'
  },
  {
    title: 'Christmas Midnight Mass',
    alt: 'Christmas Eve service with candlelight and nativity scene',
    imgUrl: '/images/2.png',
    previewContent: 'Experience the beauty of Christmas with our traditional Midnight Mass featuring choir performances and the blessing of the nativity.'
  },
  {
    title: 'First Communion Ceremony',
    alt: 'Children receiving First Holy Communion in white dresses and suits',
    imgUrl: '/images/3.png',
    previewContent: 'Witness our young parishioners receive the Sacrament of First Holy Communion in this special ceremony filled with faith and tradition.'
  },
  {
    title: 'Lenten Retreat',
    alt: 'Prayer gathering during Lenten season with cross and candles',
    imgUrl: '/images/4.png',
    previewContent: 'Deepen your spiritual journey this Lent with our annual retreat focusing on prayer, fasting, and alms giving in preparation for Easter.'
  }
]
export default function Home() {
  return (
    <main className='mt-17.5 px-27'>
      {/* The first large image */}
      <FirstImage
        image='/images/coliseum.png'
        title='Leadership Summit 2025'
        month='August'
        author='PAX Headquarters'
        date={new Date}
      />

      <SectionTitle title='Reflections'/>

      <div className='flex gap-6'>
        {
          events.map((event, index) => (
            <InfoTile
              key={index}
              alt={event.alt}
              title={event.title}
              imgUrl={event.imgUrl}
              previewContent={event.previewContent}
            />
          ))
        }
      </div>
    </main>
  );
}
