import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import AuthManager from "../services/AuthManager";
import {Redirect} from "@reach/router";

const DashboardInner = styled.div`
  
`

const Dashboard: FunctionComponent = () => {
  if (!AuthManager.isLoggedIn) {
    return <Redirect to="/login" noThrow/>
  }
  return (
    <DashboardInner>
      <h1>Dashboard</h1>
      <p>Je suis le Dashboard</p>
    </DashboardInner>
  )
}

export default Dashboard
