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
                    <a onClick={() =>  window.location.href = "https://github.com/VictorLemosbar"}className="header-text">Dev - Victor Lemos Barbosa</a>
                </nav>
            </div>
        </header>

    )
}

export default Header