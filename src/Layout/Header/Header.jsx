import "./Header.css"

import logo from "../../assets/Footer/logo.png"


import ImageComponent from "../../Modal/ImageComponent"

const Header = () => {

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-imge">

                    <ImageComponent img={logo} variant="footer" />
                </div>

                <nav className="navbar">
                    <a className="header-text">Home</a>
                    <a className="header-text">Sobre</a>
                    <a className="header-text">Contato</a>
                </nav>
            </div>
        </header>

    )
}

export default Header