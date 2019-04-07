import React, {FunctionComponent} from 'react'
import styled, {css} from 'styled-components'
import {TeamBoardsBoardsFragment} from "../../../../graphql/components";
import {BASE_CARD} from "../../../../styles/modules/components";
import {DEFAULT_TRANSITON} from "../../../../styles/modules/variables";
import {black, light} from "../../../../styles/modules/colors";

interface Props {
  board: TeamBoardsBoardsFragment
}

const Background = styled.img`
  will-change: filter, transform;
  transition: ${DEFAULT_TRANSITON}
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
  filter: blur(2px);
  transform: scale(1.2);
`

const BoardCardInner = styled.div`
  ${BASE_CARD};
  color: ${light};
  padding: 0;
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 200px;
  & > *:not(img) {
    position: relative;
    z-index: 2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: ${black};
    opacity: 0.7;
    z-index: 1;
  }
  &:hover {
    ${Background} {
      filter: blur(10px);
      transform: scale(1.4);
    }
  }
`

const Content = styled.div`
  padding: 1.25rem;
  & h3 {
    margin-top: 0;
  }
`

const BoardCard: FunctionComponent<Props> = props => {
  const { board } = props
  return (
    <BoardCardInner>
      {board.background && <Background src={board.background}/>}
      <Content>
        <h3>{board.name}</h3>
      </Content>
    </BoardCardInner>
  )
}

export default BoardCard
