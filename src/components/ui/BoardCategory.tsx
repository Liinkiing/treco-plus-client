import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {BoardCategoryCategoryFragment} from "../../graphql/components";
import {black, dark, lightBlue} from "../../styles/modules/colors";
import {DEFAULT_BORDER_RADIUS} from "../../styles/modules/variables";
import BoardCategoryTicket from './BoardCategoryTicket';
import {rgba} from "../../utils/colors";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot, Droppable, DroppableProvided, DroppableStateSnapshot
} from "react-beautiful-dnd";

interface Props {
  category: BoardCategoryCategoryFragment
}

const BoardCategoryInner = styled.div`
  width: 300px;
  background: ${lightBlue};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  box-shadow: 0 15px 15px ${rgba(black, 0.15)};
  color: ${dark};
  padding: 0.75rem;
  & h4 {
    margin-top: 0.25rem;
  }
`

const TicketsContainer = styled.ol`
  padding: 0;
  ${BoardCategoryTicket} {
    margin-bottom: 0.75rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const getItemStyle = (draggableStyle: any, isDragging: boolean) => {
  if (isDragging) {
    draggableStyle.opacity = 0.9
  }
  return ({
    userSelect: 'none',
    boxShadow: `0 15 30px ${rgba(black, 0.55)}`,
    marginBottom: '0.75rem',
    ...draggableStyle,
  });
};

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? rgba(black, 0.05) : 'transparent',
  width: '100%',
  height: '100%',
  borderRadius: DEFAULT_BORDER_RADIUS
});

const Title = styled.h4`

`

const BoardCategory: FunctionComponent<Props> = props => {
  const { category } = props

  return (
    <BoardCategoryInner {...props}>
      <Title>{category.name}</Title>
      <TicketsContainer>
        <Droppable key={category.id} droppableId={category.id}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {category.tickets
                .sort((a, b) => a.position < b.position ? -1 : 1)
                .map(ticket =>
                  <Draggable key={ticket.id} draggableId={ticket.id} index={ticket.position}>
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                      <>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            provided.draggableProps.style,
                            snapshot.isDragging
                          )}
                        >
                          <BoardCategoryTicket ticket={ticket}/>
                        </div>
                        {provided.placeholder}
                      </>
                    )}
                  </Draggable>
                )
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </TicketsContainer>
    </BoardCategoryInner>
  )
}

export default styled(BoardCategory)``
