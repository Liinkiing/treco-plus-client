import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {BASE_CARD} from "../../styles/modules/components";
import {BoardCategoryTicketTicketFragment} from "../../graphql/components";

interface Props {
  ticket: BoardCategoryTicketTicketFragment
}

const BoardCategoryTicketInner = styled.div`
  ${BASE_CARD};
  width: 100%;
`

const BoardCategoryTicket: FunctionComponent<Props> = props => {
  const { ticket } = props
  console.log(ticket)
  return (
    <BoardCategoryTicketInner {...props}>
      {ticket.name}
    </BoardCategoryTicketInner>
  )
}

export default styled(BoardCategoryTicket)``
