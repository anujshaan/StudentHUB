import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navbarLogo">
                    Student HUB
                </div>
                <div className="navbarNav">
                    <ul>
                        <li className="login">Login</li>
                        <li className="contact">Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
