import './index.scss'
import Banner from '../../components/Banner'
import Features from '../../components/Features'
import Footer from '../../components/Footer'
import bannerImg from '../../assets/bank-tree.webp'
import featuresIcon1 from '../../assets/icon-chat.webp'
import featuresIcon2 from '../../assets/icon-money.webp'
import featuresIcon3 from '../../assets/icon-security.webp'

const featuresItem = [
  {
    title: 'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    image: featuresIcon1,
  },
  {
    title: 'More savings means higher rates',
    description:
      'The more you save with us, the higher your interest rate will be!',
    image: featuresIcon2,
  },
  {
    title: 'Security you can trust',
    description:
      'We use top of the line encryption to make sure your data and money is always safe.',
    image: featuresIcon3,
  },
]

const Home = () => {
  return (
    <>
      <main className="main__home">
        <Banner
          imageSrc={bannerImg}
          imageAlt="banner image"
          description
          descriptionTitle="No fees., No minimum deposit., High interest rates.,"
          descriptionParagraph="Open a savings account with Argent Bank today!"
        />
        <section className="featuresItems">
          {featuresItem.map((item, index) => (
            <Features
              key={index}
              imageSrc={item.image}
              imageAlt={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
