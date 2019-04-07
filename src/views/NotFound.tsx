import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import Page from "../components/Page";

const NotFoundInner = styled.div`
  
`

const NotFound: FunctionComponent = () => {

  return (
    <Page>
      <NotFoundInner>
        <h1>404</h1>
        <p>Not found</p>
      </NotFoundInner>
    </Page>
  )
}

export default NotFound
