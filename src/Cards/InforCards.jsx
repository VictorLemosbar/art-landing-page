import "../Cards/InfoCard.css"

import ImageComponent from "../Modal/ImageComponent"
import img1 from "../assets/premium_photo-1682309674226-fa47fc54568e.avif"

import img2 from "../assets/value.png"


const InforCard = () => {


    const information = [{

        theme: "Qualidade",
        description: "Cada peça da nossa loja é criada com cuidado, dedicação e muito carinho. Trabalhamos com materiais selecionados e processos artesanais que valorizam o feito à mão, garantindo produtos duráveis, únicos e cheios de personalidade. Aqui, qualidade não é apenas acabamento — é a história, o tempo e o amor colocados em cada criação. Ao escolher nossos produtos, você leva para casa algo especial, feito para durar e encantar.",
        img: img1
    },
    {

        theme: "Valor",
        description: "tNossos produtos carregam mais do que beleza: carregam significado. Cada peça é feita à mão, com tempo, cuidado e intenção, transformando materiais em algo único e especial. O verdadeiro valor está na história por trás de cada criação, no trabalho artesanal e na exclusividade de levar para casa algo feito com alma, não em série.",
        img: img2
    }
    ]


    return (

        <div className="container">
            {information.map((item) => {

                return (
                    <div key={item.theme} className="card-container">
                        <div className="card-info">
                            <div className="card-title-container">
                                <span className="card-title" >{item.theme}</span>
                            </div>
                            <span className="card-text" >{item.description}</span>
                        </div>
                        <div className="image-container">
                            <ImageComponent img={item.img} variant={"not-default"} />
                        </div>
                    </div>
                )
            })}
        </div>
    )








}

export default InforCard