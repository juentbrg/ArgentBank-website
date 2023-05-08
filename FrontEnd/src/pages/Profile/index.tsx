import './index.scss'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const Profile = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const firstName = useSelector((state: RootState) => state.user.firstName)
  const lastName = useSelector((state: RootState) => state.user.lastName)

  return (
    <>
      <main className="profile">
        <div className="profile__userContainer">
          <h1>Welcome back</h1>
          {isLoggedIn && (
            <div className="profile__user">
              <p className="profile__firstName">{firstName}</p>
              <p className="profile__lastName">{lastName}!</p>
            </div>
          )}
          <button className="profile__editNameButton">Edit Name</button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Profile
