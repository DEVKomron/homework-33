import React, { FC } from 'react'
import { MainLayoutWrapper } from './MainLayout.styles'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useRequireAuth } from '@/utils/requireAuth'
import { useRouter } from 'next/router'

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter()
  const loading = useRequireAuth()

  const isLoginPage = router.pathname === '/login'

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <MainLayoutWrapper>
      {!isLoginPage && <Sidebar />} 
      <div className='layout-wrapper'>
        {!isLoginPage && <Navbar />}
        {children}
      </div>
    </MainLayoutWrapper>
  )
}

export default MainLayout;
