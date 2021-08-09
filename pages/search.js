import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import InfoCard from '../components/MainPage/InfoCard'

export default function Search({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartDate} — ${formattedEndDate}`

  return (
    <>
      <Head>
        <title>{location} / Search / Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

      <main className="mt-[100px] mb-[20px] max-w-screen-2xl mx-auto px-10 lg:px-20">
        <section className="flex-grow">
          <p className="text-sm">300+ Stays · {range} · {noOfGuests} Guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden sm:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Typer of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More Filters</p>
          </div>

          <p className="text-sm my-5">Review COVID-19 travel restrictions before you book. <a href="#" className="underline">Learn more</a></p>

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
        </section>
      </main>

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz")
    .then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }
}
