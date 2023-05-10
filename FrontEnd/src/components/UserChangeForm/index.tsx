import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface UserChangeFormProps {
  closeModal: () => void
}

const UserChangeForm = ({ closeModal }: UserChangeFormProps) => {
  const [newUsername, setNewUsername] = useState('')

  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  //     closeModal();
  //   };

  return (
    <section className="userChange">
      <div className="userChange__background" onClick={closeModal}></div>
      <form className="userChange__form">
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
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button type="submit" className="userChange__submit">
          Submit
        </button>
      </form>
    </section>
  )
}

export default UserChangeForm
