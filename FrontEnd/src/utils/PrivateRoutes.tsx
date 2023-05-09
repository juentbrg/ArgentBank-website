import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const PrivateRoutes = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
