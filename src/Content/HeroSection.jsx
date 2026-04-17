import "./HeroSection.css"
import ImageComponent from "../Modal/ImageComponent"
import img from "../assets/artesa.png"

const HeroSection = () => {
  const title = "Peças artesanais únicas para transformar seu ambiente"
  const subtitle =  "Design feito à mão, com cuidado em cada detalhe"

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
