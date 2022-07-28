import Link from "next/link"
const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link href={"/"}>
                    <a>
                        <div className="square"></div>
                    </a>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
