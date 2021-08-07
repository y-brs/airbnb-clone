import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainPage from '../components/MainPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainPage />
      <Footer />
    </>
  )
}
