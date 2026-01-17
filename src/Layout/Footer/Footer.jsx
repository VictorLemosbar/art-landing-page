import "./Footer.css"

import ImageComponent from "../../Modal/ImageComponent"


import ImgInsta from "../../assets/Footer/noun-instagram-8157257.png"
import ImgFace from "../../assets/Footer/noun-facebook-7999723.png"

import logo from "../../assets/Footer/logo.png"

const Footer = () => {

    const images = [
        {
            id: 1,
            img: ImgInsta
        }, {
            id: 2,
            img: ImgFace
        }
    ]

    const mentions = [
        {
            id: 1,
            mention: "© Artesãos parceiros"
        },
        {
            id: 2,
            mention: "© Fornecedores locais"
        },
        {
            id: 3,
            mention: "© Cooperativas de artesanato"
        },
        {
            id: 4,
            mention: "© Lojas colaboradoras"
        },
        {
            id: 5,
            mention: "© Victor Lemos Barbosa"
        }
    ]

    return (
        <div className="footer-container">
            <div className="footer-space">
                <div className="footer-aboutUs">
                    <ImageComponent img={logo} variant="footer" />

                    <div className="footer-text">Acreditamos que o artesanato vai além de criar objetos — é contar histórias, transmitir cuidado e valorizar cada detalhe. Nosso trabalho nasce do carinho pelo feito à mão, da escolha consciente dos materiais e do respeito ao tempo de criação de cada peça.</div>
                </div>

                <div className="mensions-container">
                    {mentions.map(item => {
                        return (
                            <div key={item.id}>
                                <span className="footer-mentions">{item.mention}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="contact-container">
                    <h2>Connect with us</h2>
                    <div className="img-footer-container">
                        {images.map(item => (
                            <img
                                key={item.id}
                                className="img-footer"
                                src={item.img}
                                alt=""
                            />
                        ))}
                    </div>
                    <button onClick={() => alert("Seguindo")}className="btn-footer">Follow</button>
                </div>
            </div>

        </div>

    )
}

export default Footer