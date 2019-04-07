import React, {FormEventHandler, FunctionComponent} from 'react'
import styled from 'styled-components'
import useInput from "@rooks/use-input";
import {LoginUserMutationLoginUser, useLoginUserMutation} from "../graphql/components";
import AuthManager from "../services/AuthManager";

const LoginFormInner = styled.form`
  
`

const LoginForm: FunctionComponent = () => {
  const email = useInput('')
  const password = useInput('')
  const loginUser = useLoginUserMutation({
    variables: { input: { email: email.value, password: password.value } }
  })

  const onSubmit: FormEventHandler = async e => {
    e.preventDefault()
    const response = await loginUser()

    if (response.data && response.data.loginUser) {
      const {token, refreshToken} = response.data.loginUser
      AuthManager.login(token, refreshToken)
    }
  }


  return (
    <LoginFormInner onSubmit={onSubmit}>
        <input type="text" {...email} />
        <input type="password" {...password} />
        <button type="submit">Submit</button>
    </LoginFormInner>
  )
}

export default LoginForm
