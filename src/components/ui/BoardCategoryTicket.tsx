import React, {FunctionComponent} from 'react'
import styled, {css} from 'styled-components'
import {BASE_CARD} from "../../styles/modules/components";
import {BoardCategoryTicketTicketFragment} from "../../graphql/components";
import {darkCyan} from "../../styles/modules/colors";

interface Props {
  ticket: BoardCategoryTicketTicketFragment
}

const BoardCategoryTicketInner = styled.div`
  ${BASE_CARD};
  width: 100%;
  position: relative;
  overflow: hidden;
`

interface StyledProps {
  progression: number
}

const BoardCategoryTicketProgression = styled.div<StyledProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${darkCyan};
  height: 4px;
  ${({ progression }: StyledProps) => progression && css`
    width: ${progression}%;
  `}
`

const BoardCategoryTicket: FunctionComponent<Props> = props => {
  const { ticket } = props

  return (
    <BoardCategoryTicketInner {...props}>
      {ticket.name}
      <BoardCategoryTicketProgression progression={ticket.completion!}/>
    </BoardCategoryTicketInner>
  )
}

export default styled(BoardCategoryTicket)``
