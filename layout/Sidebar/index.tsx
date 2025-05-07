import Link from 'next/link'
import React from 'react'
import { SidebarWrapper, NavLinkStyled } from './Sidebar.styles'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Sidebar = () => {
  const router = useRouter()

  return (
    <SidebarWrapper>
      <Image src="/logo.png" alt="logoImg" width={80} height={80} />
      <ul>
        <li>
          <Link href="/students" passHref legacyBehavior>
            <NavLinkStyled className={router.pathname === '/students' ? 'active' : ''}>Students</NavLinkStyled>
          </Link>
        </li>
        <li>
          <Link href="/classes" passHref legacyBehavior>
            <NavLinkStyled className={router.pathname === '/classes' ? 'active' : ''}>Classes</NavLinkStyled>
          </Link>
        </li>
        <li>
          <Link href="/teachers" passHref legacyBehavior>
            <NavLinkStyled className={router.pathname === '/teachers' ? 'active' : ''}>Teachers</NavLinkStyled>
          </Link>
        </li>
        <li>
          <Link href="/school" passHref legacyBehavior>
            <NavLinkStyled className={router.pathname === '/school' ? 'active' : ''}>School Info</NavLinkStyled>
          </Link>
        </li>
      </ul>
    </SidebarWrapper>
  )
}

export default Sidebar
