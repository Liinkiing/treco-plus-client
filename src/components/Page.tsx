import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import Container from "./ui/Container";

const PageInner = styled.div`
  
`

const Page: FunctionComponent = props => {
  const { children } = props
  return (
    <Container>
      <PageInner>
        {children}
      </PageInner>
    </Container>
  )
}

export default Page
