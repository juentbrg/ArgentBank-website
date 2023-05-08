import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { signInUser } from '../../features/authSlice'
import { getUser } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await dispatch(signInUser({ email, password }))
    dispatch(getUser())
  }

  useEffect(() => {
    isLoggedIn && navigate('/profile')
  }, [isLoggedIn, navigate])

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
