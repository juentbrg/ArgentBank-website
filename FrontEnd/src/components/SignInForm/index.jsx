import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SignInForm = () => {
  return (
    <section className="signIn">
      <FontAwesomeIcon icon={faUserCircle} />
      <h1 className="signIn__title">Sign In</h1>
      <form>
        <div className="signIn__username">
          <label className="signIn__label" htmlFor="username">
            Username
          </label>
          <input
            className="signIn__input"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div className="signIn__password">
          <label className="signIn__label" htmlFor="password">
            Password
          </label>
          <input
            className="signIn__input"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="signIn__remember">
          <label htmlFor="remember">Remember me</label>
          <input type="checkbox" name="remember" id="remember" />
        </div>
        <button className="signIn__submit" type="submit" id="signIn__btn">
          Sign In
        </button>
      </form>
    </section>
  )
}

export default SignInForm
