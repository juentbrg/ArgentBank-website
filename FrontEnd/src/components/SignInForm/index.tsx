import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../../app/store'
import { login } from '../../actions/userActions'

const SignInForm = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  return (
    <section className="signIn">
      <FontAwesomeIcon icon={faUserCircle} />
      <h1 className="signIn__title">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="signIn__username">
          <label className="signIn__label" htmlFor="username">
            Username
          </label>
          <input
            className="signIn__input"
            type="text"
            name="username"
            id="username"
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
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