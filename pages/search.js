import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainPage from '../components/MainPage'

export default function Search() {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>
        Search Page
      </h1>

      <Footer />
    </>
  )
}
