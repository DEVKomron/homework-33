import { FC } from 'react'
import MainLayout from '@/layout/index'
import "@/styles/globals.css";
import { AppProps } from 'next/app'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const isLoginPage = pageProps?.route?.includes('login')

  return isLoginPage ? (
    <Component {...pageProps} />
  ) : (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp;
