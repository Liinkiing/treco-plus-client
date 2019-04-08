import React, {FunctionComponent, ReactNode} from 'react'
import { BulletList, Code, Facebook, Instagram, List } from 'react-content-loader'
import styled from 'styled-components'
import Container from "./Container";

interface Props {
  count: number,
  loader: "facebook" | "instagram" | "code" | "list" | "bulletList",
  width?: number,
  height?: number
}

const LoadersInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  & > * {
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const Loaders: FunctionComponent<Props> = props => {
  const {count, width, height, loader} = props
  let Component = BulletList
  switch (loader) {
    case "facebook":
      Component = Facebook
      break;
    case "instagram":
      Component = Instagram
      break;
    case "code":
      Component = Code
      break;
    case "list":
      Component = List
      break;
    case "bulletList":
      Component = BulletList
      break;
  }

  return (
    <Container>
      <LoadersInner>
        {[...Array(count)].map((_, i) => <Component key={i} style={{ width, height }}/>)}
      </LoadersInner>
    </Container>
  )
}

Loaders.defaultProps = {
  width: 400,
  height: 130
}

export default Loaders
