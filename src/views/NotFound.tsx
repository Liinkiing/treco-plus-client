import React, {FunctionComponent} from 'react'
import styled from 'styled-components'

const NotFoundInner = styled.div`
  
`

const NotFound: FunctionComponent = () => {

  return (
    <NotFoundInner>
      <h1>404</h1>
      <p>Not found</p>
    </NotFoundInner>
  )
}

export default NotFound
