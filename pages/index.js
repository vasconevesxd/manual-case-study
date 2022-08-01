import Head from 'next/head'
import Jumbotron from '../components/elements/Jumbotron'
import Steps from '../components/layouts/Steps'
export default function Home() {
  return (
    <>
      <Head>
        <title>Manual: Men's Healthcare. Made easy. More than a pharmacy.</title>
        <meta name="description" content="We're here to help give you all the right info and choices. From erectile dysfunction to hair loss and beyond. So you can be the healthiest, happiest man you can be." />
        <link rel="icon" href="/favicon.ico" />  
      </Head>
      <main>
        <Jumbotron/>
        <Steps/> 
      </main>
    </>
  )
}
