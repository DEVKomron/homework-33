import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  width: 250px;
  min-height: 100vh;
  padding: 20px;
  border-right: 1px solid #001529;
  background-color:  #001529;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 30px;
    border: 2px solid #001529;
    border-radius: 50%;
  }

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  li {
    margin: 15px 0;
    text-align: center;
  }
`

export const NavLinkStyled = styled.a`
  display: block;
  color:white;
  padding: 10px;
  border: 1px solid #001529;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #001529;
    color: white;
  }

  &.active {
    background-color: #001529;
    color: white;
  }
`
