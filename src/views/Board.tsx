import React, {FunctionComponent, Suspense} from 'react'
import styled from 'styled-components'
import Page from "../components/Page";
import {RouteComponentProps} from "@reach/router";
import {APPNAV_HEIGHT} from "../styles/modules/variables";
import {useBoardQuery} from "../graphql/components";
import ErrorMessage from "../components/ui/ErrorMessage";
import Loaders from "../components/ui/Loaders";
import BoardCategory from "../components/ui/BoardCategory";

type Props = RouteComponentProps<{
  teamId: string,
  boardId: string
}> & {}

const BoardInner = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${APPNAV_HEIGHT});
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
    <BoardInner {...props}>
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
  <Suspense fallback={<Loaders count={2} loader="code"/>}>
    <BoardSuspensed {...props}/>
  </Suspense>
)

export default Board

