import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import Container from "./ui/Container";

interface Props {
  container?: boolean
}

const PageInner = styled.div`
  
`

const Page: FunctionComponent<Props> = props => {
  const {children, container} = props
  return container ?
    (
      <Container>
        <PageInner>
          {children}
        </PageInner>
      </Container>
    ) :
    (
      <PageInner>
        {children}
      </PageInner>
    )
}

Page.defaultProps = {
  container: true
}

export default Page
