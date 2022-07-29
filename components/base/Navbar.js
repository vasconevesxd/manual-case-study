import Link from "next/link"
import Logo from '../../assets/icons/logo.svg'
const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link href={"/"}>
                    <a>
                        <Logo />
                    </a>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
