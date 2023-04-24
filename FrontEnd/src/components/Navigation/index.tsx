import './index.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <Link to={'/'}>
          <img className="navigation__logo" src={logo} alt="ArgentBank logo" />
        </Link>
        <div className="navigation__signIn">
          <FontAwesomeIcon icon={faUserCircle} />
          <Link to={'/login'} className="navigation__signInLink">
            <p className="navigation__signButton">Sign In</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
