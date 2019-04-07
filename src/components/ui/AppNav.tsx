import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {Link} from "@reach/router";
import AuthManager from "../../services/AuthManager";
import useViewer from "../../hooks/useViewer";
import {darkCyan} from "../../styles/modules/colors";
import Button from "./Button";
import Container from "./Container";

const LogoutButton = Button

const AppNavInner = styled.nav`
  height: 80px;
  width: 100%;
  background: ${darkCyan};
  display: flex;
  align-items: center;
  & a {
    
  }
  ${LogoutButton} {
    margin-left: auto;
    margin-right: 20px;
  }
`

const AppNav: FunctionComponent = () => {
  const viewer = useViewer({suspend: true})
  const {isLoggedIn} = AuthManager

  return (
    <AppNavInner>
      <Container>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        {isLoggedIn && viewer && <Link to="/profile">{viewer.username}</Link>}
        {isLoggedIn && <LogoutButton onClick={AuthManager.logout}>Logout</LogoutButton>}
      </Container>
    </AppNavInner>
  )
}

export default AppNav
