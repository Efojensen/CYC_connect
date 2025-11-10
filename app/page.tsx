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

const formations: InfoTileProps[] = [
  {
    title: 'RCIA Program',
    alt: 'Group of adults participating in RCIA classes',
    imgUrl: '/images/5.jpg',
    previewContent: 'Join our Rite of Christian Initiation for Adults to learn about Catholic faith and prepare for sacraments of initiation.'
  },
  {
    title: 'Bible Study Series',
    alt: 'Small group studying the Bible together',
    imgUrl: '/images/6.jpg',
    previewContent: 'Deepen your understanding of Scripture through our weekly Bible study exploring the Gospels and Church teachings.'
  },
  {
    title: 'Marriage Preparation',
    alt: 'Engaged couple meeting with priest for marriage preparation',
    imgUrl: '/images/7.jpg',
    previewContent: 'Prepare for the sacrament of Matrimony with our comprehensive marriage preparation program and FOCCUS inventory.'
  },
  {
    title: 'Youth Catechism',
    alt: 'Teenagers learning catechism in classroom setting',
    imgUrl: '/images/8.jpg',
    previewContent: 'Youth faith formation program teaching Catholic doctrine and helping young people grow in their relationship with Christ.'
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

      <section>
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
      </section>

      <section className='my-38'>
        <SectionTitle title='Formations'/>
        <div className='flex gap-6'>
          {
            formations.map((formation, index) => (
              <InfoTile
                key={index}
                alt={formation.alt}
                title={formation.title}
                imgUrl={formation.imgUrl}
                previewContent={formation.previewContent}
              />
            ))
          }
        </div>
      </section>
    </main>
  );
}
