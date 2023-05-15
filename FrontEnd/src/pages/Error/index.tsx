import { Link } from 'react-router-dom'
import './index.scss'

const Error = () => {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__paragraph">
        Oups! la page que vous demandez n'existe pas.
      </p>
      <Link to={'/'} className="error__link">
        Retourner à la page d'acceuil
      </Link>
    </section>
  )
}

export default Error
