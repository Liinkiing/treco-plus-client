import React, {FunctionComponent, Suspense} from 'react'
import { BulletList } from 'react-content-loader'
import styled from 'styled-components'
import AuthManager from "../services/AuthManager";
import {Redirect} from "@reach/router";
import Page from "../components/Page";
import ViewerTeams from "../components/ViewerTeams";
import Loaders from "../components/ui/Loaders";

const DashboardInner = styled.div`
  
`

const Dashboard: FunctionComponent = () => {
  if (!AuthManager.isLoggedIn) {
    return <Redirect to="/login" noThrow/>
  }
  return (
    <Page>
      <DashboardInner>
        <h1>Dashboard</h1>
        <p>Vos équipes</p>
        <Suspense fallback={<Loaders count={4} loader={"bulletList"}/>}>
          <ViewerTeams/>
        </Suspense>
      </DashboardInner>
    </Page>
  )
}

export default Dashboard
