import './index.scss'
import SignInForm from '../../components/SignInForm'
import Footer from '../../components/Footer'

const Login = () => {
  return (
    <>
      <main className="main__signIn">
        <SignInForm />
      </main>
      <Footer />
    </>
  )
}

export default Login
