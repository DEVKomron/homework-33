import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { isAuthenticated } from '../../utils/auth'
import {
  NavbarWrapper,
  Brand,
  LogoutButton
} from './Navbar.styles'

const Navbar = () => {
  const router = useRouter()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    setAuth(isAuthenticated())
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return (
    <NavbarWrapper>
      <Brand>School Dashboard</Brand>
      {auth && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
    </NavbarWrapper>
  )
}

export default Navbar
