import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #001529;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #001529;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 255, 255, 0.2);

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #001529;
  border-radius: 4px;
  color: #001529;
  outline: none;

  &::placeholder {
    color: #888;
  }
`

export const Button = styled.button`
  background-color: #001529;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.4s ease, color 0.4s ease, border 0.4s ease;

  &:hover {
    background-color: white;
    color: #001529;
    border: 1px solid #001529;
  }
`
