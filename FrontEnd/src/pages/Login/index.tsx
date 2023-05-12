import './index.scss'
import SignInForm from '../../components/SignInForm'
import SignUpForm from '../../components/SignUpForm'
import Footer from '../../components/Footer'
import { useState } from 'react'

const Login = () => {
  const [signUp, setSignUp] = useState(false)

  const toggleSignUp = () => {
    setSignUp(!signUp)
  }

  return (
    <>
      <main className="main__signIn">
        {!signUp ? (
          <SignInForm toggleSignUp={toggleSignUp} />
        ) : (
          <SignUpForm toggleSignUp={toggleSignUp} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default Login
