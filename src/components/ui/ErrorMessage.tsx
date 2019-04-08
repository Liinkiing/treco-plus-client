import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {ApolloError} from 'apollo-boost';
import Container from "./Container";

interface Props {
  error: ApolloError
}

const ErrorMessageInner = styled.div`
  
`

const ErrorMessage: FunctionComponent<Props> = props => {
  const { error } = props
  const message = error.graphQLErrors.map(gqlError => gqlError.message).join(', ')
  return (
    <Container>
      <ErrorMessageInner {...props}>
        {message}
      </ErrorMessageInner>
    </Container>
  )
}

export default styled(ErrorMessage)<Props>``
