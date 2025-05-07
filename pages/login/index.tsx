import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { LoginWrapper, Form, Input, Button } from './LoginStyles'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/')
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (username === 'parol' && password === 'parol') {
      localStorage.setItem('token', 'mock_token')  
      router.push('/') 
    } else {
      alert('Invalid credential')
    }
  }
 
  return (
    <LoginWrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </LoginWrapper>
  )
}
