import Head from 'next/head'
import Jumbotron from '../components/elements/Jumbotron'
import Steps from '../components/layouts/Steps'
import Meta from '../components/base/Meta'
export default function Home() {
  return (
    <>
      <Head>
        <Meta/>
      </Head>
      <main>
        <Jumbotron/>
        <Steps/> 
      </main>
    </>
  )
}
