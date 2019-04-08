import React, {FunctionComponent, Suspense} from 'react'
import styled, {css} from 'styled-components'
import Page from "../components/Page";
import {RouteComponentProps} from "@reach/router";
import {APPNAV_HEIGHT, MAIN_GRADIENT} from "../styles/modules/variables";
import {BoardBoardFragment, useBoardQuery} from "../graphql/components";
import ErrorMessage from "../components/ui/ErrorMessage";
import Loaders from "../components/ui/Loaders";
import BoardCategory from "../components/ui/BoardCategory";

type Props = RouteComponentProps<{
  teamId: string,
  boardId: string
}> & {}

interface StyledProps {
  board: BoardBoardFragment
}

const BoardInner = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${APPNAV_HEIGHT});
  & h1 {
    margin-top: 0;
  }
  ${({ board }: StyledProps) => board.background ? css`
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: ${MAIN_GRADIENT};
      opacity: 0.7; 
      z-index: 0;
    }
    > * {
      position: relative;
      z-index: 1;
    }
    background: url(${board.background});
    background-size: cover;
    
  ` : ''}
`

const CategoriesContainer = styled.ol`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: baseline;
  ${BoardCategory} {
    margin-right: 1.25rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const Content = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const BoardSuspensed: FunctionComponent<Props> = props => {
  const {boardId} = props
  const {data, error} = useBoardQuery({
    variables: {id: boardId!},
    suspend: true
  })

  if (error) {
    return <ErrorMessage error={error}/>
  }

  return (
    <BoardInner {...props} board={data!.node!}>
      <Content>
        <h1>Board</h1>
        <CategoriesContainer>
          {data!.node!.categories!
            .sort((a, b) => a.position < b.position ? -1 : 1)
            .map(category => <BoardCategory key={category.id} category={category}/>)
          }
        </CategoriesContainer>
      </Content>
    </BoardInner>
  )
}

const Board: FunctionComponent<Props> = props => (
  <Suspense fallback={<div style={{padding: '40px'}}><Loaders count={2} loader="code"/></div>}>
    <BoardSuspensed {...props}/>
  </Suspense>
)

export default Board

