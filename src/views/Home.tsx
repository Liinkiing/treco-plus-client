import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import Page from "../components/Page";

const HomeInner = styled.div`
  
`

const Home: FunctionComponent = () => {

  return (
    <Page>
      <HomeInner>
        <h1>Home</h1>
        <p>Je suis la home</p>
      </HomeInner>
    </Page>
  )
}

export default Home
