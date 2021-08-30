import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import InfoCard from '../components/MainPage/InfoCard'
import Map from '../components/MainPage/Map'

export default function Search({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = format(new Date(startDate), "dd MMM")
  const formattedEndDate = format(new Date(endDate), "dd MMM")
  const range = `${formattedStartDate} – ${formattedEndDate}`

  return (
    <>
      <Head>
        <title>{location} · Stays · Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

      <main className="mt-[80px] max-w-screen-2xl flex mx-auto px-10 lg:px-20">
        <div className="flex w-full">
        <section className="flex-grow w-full">
          <p className="mt-10 text-sm font-light">300+ Stays · {range} · {noOfGuests} Guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden xl:flex space-x-3 text-gray-800 whitespace-nowrap">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Typer of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More Filters</p>
          </div>

          <p className="text-sm my-5 font-light">Review COVID-19 travel restrictions before you book. <a href="#" className="underline">Learn more</a></p>

          <div className="flex flex-col">
            {searchResults.map(({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 my-12 font-light">Additional fees apply. Taxes may be added.</p>
        </section>

        <section className="min-h-screen ml-8 hidden lg:flex lg:min-w-[400px]">
          <Map searchResults={searchResults} />
        </section>
        </div>


      </main>

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const searchResults = require('../dummyData/hotelList.json');

  // const searchResults = await fetch("")
  //   .then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }
}
