import "./ImageComponent.css"

const ImageComponent = ({ img, variant  = "default" }) => {
    return (
        <div className={`img img-${variant }`}>
            <img src={img} alt=""></img>
        </div>
    )
}

export default ImageComponent