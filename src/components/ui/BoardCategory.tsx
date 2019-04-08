import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {BoardCategoryCategoryFragment} from "../../graphql/components";
import {black, dark, lightBlue} from "../../styles/modules/colors";
import {DEFAULT_BORDER_RADIUS, DEFAULT_BOX_SHADOW} from "../../styles/modules/variables";
import BoardCategoryTicket from './BoardCategoryTicket';
import {rgba} from "../../utils/colors";

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

const BoardCategory: FunctionComponent<Props> = props => {
  const { category } = props

  return (
    <BoardCategoryInner {...props}>
      <h4>{category.name}</h4>
      <TicketsContainer>
        {category.tickets
          .sort((a, b) => a.position < b.position ? -1 : 1)
          .map(ticket =>
            <BoardCategoryTicket key={ticket.id} ticket={ticket}/>
          )
        }
      </TicketsContainer>
    </BoardCategoryInner>
  )
}

export default styled(BoardCategory)``
