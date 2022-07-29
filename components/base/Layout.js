import Navbar from '../base/Navbar'
import Footer from '../base/Footer'
import { useRouter } from 'next/router'
const Layout = ({children}) => {
    const router = useRouter().pathname
    return (
    <>
        {router !== '/quizzes' ? <Navbar/> : null}
        {children}
        {router !== '/quizzes' ? <Footer/> : null}
    </>
    )
}

export default Layout
