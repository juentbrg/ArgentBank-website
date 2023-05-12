import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { setSucceeded, signUp } from '../../features/signSlice'

interface UserSignUpProps {
  toggleSignUp: () => void
}

const SignUpForm = ({ toggleSignUp }: UserSignUpProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const error = useSelector((state: RootState) => state.sign.error)
  const message = useSelector((state: RootState) => state.sign.message)
  const succeeded = useSelector((state: RootState) => state.sign.succeeded)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await dispatch(signUp({ firstName, lastName, userName, email, password }))
    setTimeout(() => {
      dispatch(setSucceeded(false))
      toggleSignUp()
    }, 2000)
  }

  return (
    <section className="signUp">
      <FontAwesomeIcon icon={faUserCircle} />
      <h1 className="signUp__title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="signUp__firstName">
          <label className="signUp__label" htmlFor="firstname">
            Firstname
          </label>
          <input
            className="signUp__input"
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="signUp__lastName">
          <label className="signUp__label" htmlFor="lastname">
            Lastname
          </label>
          <input
            className="signUp__input"
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="signUp__userName">
          <label className="signUp__label" htmlFor="username">
            Username
          </label>
          <input
            className="signUp__input"
            type="text"
            name="usernale"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="signUp__email">
          <label className="signUp__label" htmlFor="email">
            Email
          </label>
          <input
            className="signUp__input"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signUp__password">
          <label className="signUp__label" htmlFor="password">
            Password
          </label>
          <input
            className="signUp__input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="signUp__error">{error}</p>}
        {succeeded && <p className="signUp__succeeded">{message}</p>}
        <button className="signUp__submit" type="submit" id="signUp__btn">
          Sign Up
        </button>
      </form>
      <p className="signUp__signIn">
        Or{' '}
        <span className="signUp__signInLink" onClick={toggleSignUp}>
          sign in
        </span>
      </p>
    </section>
  )
}

export default SignUpForm
