import Navbar from '../base/Navbar'
import Footer from '../base/Footer'
import Meta from '../base/Meta'
import Head from 'next/head'

import { useRouter } from 'next/router'

const Layout = ({children}) => {
    const router = useRouter().pathname
    return (
    <>
        <Head>
            <Meta/>
        </Head>
        {router !== '/quizzes' ? <Navbar/> : null}
        {children}
        {router !== '/quizzes' ? <Footer/> : null}
    </>
    )
}

export default Layout
