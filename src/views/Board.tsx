import React, {FunctionComponent, Suspense, useCallback} from 'react'
import styled, {css} from 'styled-components'
import {
  DragDropContext,
  OnDragEndResponder
} from 'react-beautiful-dnd';
import {RouteComponentProps} from "@reach/router";
import {APPNAV_HEIGHT, MAIN_GRADIENT} from "../styles/modules/variables";
import {
  BoardBoardFragment,
  useBoardQuery,
  useChangeTicketPositionMutation
} from "../graphql/components";
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
  ${({board}: StyledProps) => board.background ? css`
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
  const changeTicketPositionMutation = useChangeTicketPositionMutation()
  const {data, error} = useBoardQuery({
    variables: {id: boardId!},
    suspend: true
  })
  const getChangeTicketPositionOptimisticResponse = useCallback((
    {newPosition, fromIndex, fromCategoryId, toCategoryId, ticketId}
      : { newPosition: number, fromIndex: number, fromCategoryId: string, toCategoryId: string, ticketId: string }
    ) => {
      const newCategories = data!.node!.categories!
      const movingToUp = newPosition < fromIndex
      if (fromCategoryId === toCategoryId) {
        const searchedCategory = newCategories.find(cat => cat.id === toCategoryId)
        if (searchedCategory) {
          const movedTicket = searchedCategory.tickets.find(t => t.position === fromIndex)
          if (movedTicket) {
            movedTicket.position = newPosition
          }
          if (movingToUp) {
            searchedCategory.tickets = searchedCategory.tickets.map(ticket =>
              ticket.id !== ticketId && ticket.position >= newPosition ? {
                ...ticket,
                position: ticket.position + 1
              } : ticket
            )
          } else {
            searchedCategory.tickets = searchedCategory.tickets.map(ticket =>
              ticket.id !== ticketId && ticket.position <= newPosition ? {
                ...ticket,
                position: ticket.position - 1
              } : ticket
            )
          }
        }
      } else {
        const fromCategory = newCategories.find(cat => cat.id === fromCategoryId)
        const toCategory = newCategories.find(cat => cat.id === toCategoryId)
        if (fromCategory && toCategory) {
          const movedTicket = fromCategory.tickets.find(ticket => ticket.id === ticketId)
          if (movedTicket) {
            fromCategory.tickets = fromCategory.tickets.filter(ticket => ticket.id !== ticketId)
            toCategory.tickets.push({...movedTicket, position: newPosition})
            toCategory.tickets = toCategory.tickets.map(ticket =>
              ticket.id !== ticketId && ticket.position >= newPosition ? {
                ...ticket,
                position: ticket.position + 1
              } : ticket
            )
          }
        }
      }
      return {
        __typename: 'Mutation',
        changeTicketPosition: {
          __typename: 'ChangeTicketPositionPayload',
          board: {
            __typename: 'Board',
            name: data!.node!.name,
            background: data!.node!.background,
            id: boardId,
            categories: newCategories
          }
        }
      };
    }
  , [data])

  const onDragEnd: OnDragEndResponder = async (result) => {
    if (result && result.draggableId && result.destination && result.source) {
      const {
        source: {droppableId: fromCategoryId, index: fromIndex},
        destination: {index: newPosition, droppableId: toCategoryId},
        draggableId: ticketId
      } = result
      await changeTicketPositionMutation({
        variables: {input: {ticketId, fromCategoryId, toCategoryId, newPosition}},
        optimisticResponse: getChangeTicketPositionOptimisticResponse({
          newPosition,
          fromIndex,
          fromCategoryId,
          toCategoryId,
          ticketId
        })
      })

    }
  }

  if (error) {
    return <ErrorMessage error={error}/>
  }

  return (
    <BoardInner {...props} board={data!.node!}>
      <Content>
        <h1>Board</h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <CategoriesContainer>
            {data!.node!.categories!
              .sort((a, b) => a.position < b.position ? -1 : 1)
              .map(category => <BoardCategory key={category.id} category={category}/>)
            }
          </CategoriesContainer>
        </DragDropContext>
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

