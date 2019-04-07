import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {ApolloError} from 'apollo-boost';

interface Props {
  error: ApolloError
}

const ErrorMessageInner = styled.div`
  
`

const ErrorMessage: FunctionComponent<Props> = props => {
  const { error } = props
  return (
    <ErrorMessageInner>
      {error.graphQLErrors.join(', ')}
    </ErrorMessageInner>
  )
}

export default styled(ErrorMessage)<Props>``
