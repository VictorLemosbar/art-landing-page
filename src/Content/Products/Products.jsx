import "./Products.css"

import img1 from "../../assets/vaso.png"
import img2 from "../../assets/bolsa.png"
import img3 from "../../assets/quadro.png"
import img4 from "../../assets/sabonete.png"


import { useState } from "react"

const Products = () => {

    const [active, setActive] = useState(null)

    const producstList = [
        {
            nome: "Vaso de cerâmica artesanal",
            preco: 120.00,
            material: "Cerâmica",
            img: img1
        },
        {
            nome: "Bolsa de crochê",
            preco: 180.50,
            material: "Linha de algodão",
            img: img2
        },
        {
            nome: "Quadro decorativo em madeira",
            preco: 250.00,
            material: "Madeira reciclada",
            img: img3
        },
        {
            nome: "Sabonete artesanal",
            preco: 25.00,
            material: "Óleos naturais",
            img: img4
        }
    ]

    return (
        <>
            <h1 className="products-title">Produtos</h1>
            <p className="p-title">Passe o mouse sobre a imagem</p>
            <div className="card" >
                {producstList.map(item => {
                    return (
                        <div className="card-inner" key={item.nome}>
                            <div className="card-back">
                                <span className="card-item-name">{item.nome}</span>
                                <span className="card-iem-price">R$ {item.preco}</span>
                            </div>
                            <div className="card-front">
                                <img className="img-size" src={item.img} alt=""></img>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default Products