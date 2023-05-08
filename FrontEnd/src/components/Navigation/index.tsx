import './index.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { clearProfile } from '../../features/userSlice'
import { logout } from '../../features/authSlice'

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const firstName = useSelector((state: RootState) => state.user.firstName)

  const handleSignOut = () => {
    dispatch(logout())
    dispatch(clearProfile())
  }

  return (
    <header>
      <nav className="navigation">
        <Link to={'/'}>
          <img className="navigation__logo" src={logo} alt="ArgentBank logo" />
        </Link>
        <div className="navigation__signIn">
          <div className="navigation__user">
            <FontAwesomeIcon icon={faUserCircle} />
            {isLoggedIn && <p className="navigation__userName">{firstName}</p>}
          </div>
          <Link to={'/login'} className="navigation__signInLink">
            {!isLoggedIn ? (
              <p className="navigation__signInButton">Sign In</p>
            ) : (
              <div className="navigation__signOutContainer">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                <p
                  className="navigation__signOutButton"
                  onClick={handleSignOut}
                >
                  Sign Out
                </p>
              </div>
            )}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
