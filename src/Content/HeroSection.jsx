import "./HeroSection.css"
import ImageComponent from "../Modal/ImageComponent"
import img from "../assets/artesa.png"

const HeroSection = () => {
  const title = "Artesanato feito à mão, com cuidado em cada detalhe"
  const subtitle =  "Peças únicas que unem criatividade, qualidade e o valor do feito com carinho."

  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="hero-section-img-container">
      <ImageComponent img={img} variant ={"default"} />
      </div>
    </section>
  )
}

export default HeroSection
