import './index.scss'

interface BannerProps {
  imageSrc: string
  imageAlt: string
  description?: boolean
  descriptionTitle?: string
  descriptionParagraph?: string
}

const Banner = ({
  imageSrc,
  imageAlt,
  description = false,
  descriptionTitle,
  descriptionParagraph,
}: BannerProps) => {
  const descriptionTitleParagraphs = descriptionTitle
    ? descriptionTitle
        .split(',')
        .map((paragraph, index) => <p key={index}>{paragraph.trim()}</p>)
    : null

  return (
    <section className="banner">
      <img src={imageSrc} alt={imageAlt} className="banner__image" />
      {description && (
        <div className="banner__description">
          {descriptionTitle && (
            <div className="banner__descriptionTitle">
              {descriptionTitleParagraphs}
            </div>
          )}
          {descriptionParagraph && (
            <p className="banner__descriptionParagraph">
              {descriptionParagraph}
            </p>
          )}
        </div>
      )}
    </section>
  )
}

export default Banner
