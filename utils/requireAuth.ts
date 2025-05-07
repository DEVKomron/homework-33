import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useRequireAuth = () => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token && router.pathname !== '/login') {
      setTimeout(() => {
        router.push('/login')
      }, 300) 
    } else {
      setLoading(false) 
    }
  }, [router]) 

  return loading
}
