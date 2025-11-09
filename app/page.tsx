import FirstImage from "@components/FirstImage/FirstImage";


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
    </main>
  );
}
