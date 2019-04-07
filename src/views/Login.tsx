import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import LoginForm from "../components/LoginForm";
import AuthManager from "../services/AuthManager";
import {Redirect} from "@reach/router";

const LoginInner = styled.div`
  
`

const Login: FunctionComponent = () => {
  if (AuthManager.isLoggedIn) {
    console.log('REDIRECTING')
    return <Redirect to="/dashboard" noThrow/>
  }
  return (
    <LoginInner>
      <h1>Login</h1>
      <p>Je suis le login</p>
      <LoginForm/>
    </LoginInner>
  )
}

export default Login
