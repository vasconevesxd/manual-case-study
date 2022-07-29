import Link from "next/link"
import Logo from '../../assets/icons/logo.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Gmail from '../../assets/icons/gmail.svg'
import Twitter from '../../assets/icons/twitter.svg'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content-image">
                    <Link href={"/"}>
                        <a>
                            <Logo />
                        </a>
                    </Link>
                </div>
                <div className="footer__content-nav">
                    <nav className="nav">
                        <h4 className="nav-title">Product</h4>

                        <ul className="list">
                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Popular</a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Trending</a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Guided</a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Products</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>        
                    
                    <nav className="nav">
                        <h4 className="nav-title">Company</h4>

                        <ul className="list">
                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Press</a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Mission</a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Strategy</a>
                                </Link>
                            </li>
                            
                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>About</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>    

                    <nav className="nav">
                        <h4 className="nav-title">Info</h4>

                        <ul className="list">
                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Support</a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Custome Service</a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a>Get started</a>
                                </Link>
                            </li>
                        </ul>
                    </nav> 

                    <nav className="nav">
                        <h4 className="nav-title">Follow us</h4>

                        <ul className="list">
                            <li className="list__item">
                                <Link href={"#"}>
                                    <a><Facebook /></a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a><Gmail /></a>
                                </Link>
                            </li>

                            <li className="list__item">
                                <Link href={"#"}>
                                    <a><Twitter /></a>
                                </Link>
                            </li>
                        </ul>
                    </nav> 
                </div>
            </div>
            <div className="footer__copyright">
                <p className="footer__copyright-text">	&#169; 2021 Manual. All rights reserverd</p>
            </div>
        </footer>
    )
}

export default Footer
