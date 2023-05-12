import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { changeUserName, setSucceeded } from '../../features/userNameSlice'

interface UserChangeFormProps {
  closeModal: () => void
}

const UserChangeForm = ({ closeModal }: UserChangeFormProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const error = useSelector((state: RootState) => state.userName.error)
  const succeeded = useSelector((state: RootState) => state.userName.succeeded)
  const message = useSelector((state: RootState) => state.userName.message)
  const [userName, setNewUsername] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await dispatch(changeUserName({ userName }))
    setTimeout(() => {
      dispatch(setSucceeded(false))
      closeModal()
    }, 2000)
  }

  return (
    <section className="userChange">
      <div className="userChange__background" onClick={closeModal}></div>
      <form className="userChange__form" onSubmit={handleSubmit}>
        <FontAwesomeIcon
          icon={faXmark}
          className="userChange__close"
          size="lg"
          onClick={closeModal}
        />
        <h1 className="userChange__title">Change Username</h1>
        <label className="userChange__label" htmlFor="username">
          New username
        </label>
        <input
          className="userChange__input"
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        {error && <p className="userChange__error">{error}</p>}
        {succeeded && <p className="userChange__succeeded">{message}</p>}
        <button type="submit" className="userChange__submit">
          Submit
        </button>
      </form>
    </section>
  )
}

export default UserChangeForm
