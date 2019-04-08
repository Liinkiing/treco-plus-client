import React, {FunctionComponent} from 'react'
import styled, {css} from 'styled-components'
import {breakpoint} from "../../styles/modules/mixins";

const ContainerInner = styled.div`
  all: inherit;
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: auto 2rem;
  ${breakpoint("tablet", css`
      max-width: 700px;
      width: 700px;
      margin: auto auto;
  `)}
  ${breakpoint("desktop", css`
      max-width: 1000px;
      width: 1000px;
      margin: auto auto;
`)}
  
`

const Container: FunctionComponent = props => {
  const { children } = props
  return (
    <ContainerInner>
      {children}
    </ContainerInner>
  )
}

export default Container
