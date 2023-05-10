import './index.scss'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import Transaction from '../../components/Transaction'

const transactionItem = [
  {
    type: 'Checking',
    id: '8349',
    amount: '2,082.79',
    status: 'Available',
  },
  {
    type: 'Savings',
    id: '6712',
    amount: '10,928.42',
    status: 'Available',
  },
  {
    type: 'Credit Card',
    id: '8349',
    amount: '184.3',
    status: 'Current',
  },
]

const Profile = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const firstName = useSelector((state: RootState) => state.user.firstName)
  const lastName = useSelector((state: RootState) => state.user.lastName)

  return (
    <>
      <main className="profile">
        <div className="profile__userContainer">
          <h1 className="profile__title">Welcome back</h1>
          {isLoggedIn && (
            <div className="profile__user">
              <p className="profile__firstName">{firstName}</p>
              <p className="profile__lastName">{lastName}!</p>
            </div>
          )}
          <button className="profile__editNameButton">Edit Name</button>
        </div>
        <section className="transactionItems">
          {transactionItem.map((item, index) => (
            <Transaction
              key={index}
              type={item.type}
              id={item.id}
              amount={item.amount}
              status={item.status}
            ></Transaction>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Profile
