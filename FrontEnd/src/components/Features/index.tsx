import './index.scss'

interface FeaturesProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

const Features = ({
  imageSrc,
  imageAlt,
  title,
  description,
}: FeaturesProps) => {
  return (
    <>
      <div className="features">
        <div className="features__imageContainer">
          <img className="features__image" src={imageSrc} alt={imageAlt} />
        </div>
        <h2 className="features__title">{title}</h2>
        <p className="features__description">{description}</p>
      </div>
    </>
  )
}

export default Features
