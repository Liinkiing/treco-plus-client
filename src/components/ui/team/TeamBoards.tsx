import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {TeamBoardsBoardsFragment} from "../../../graphql/components";
import BoardCard from "../cards/board-card";
import NeutralLink from '../../NeutralLink';

interface Props {
  boards: TeamBoardsBoardsFragment[]
}

const TeamBoardsInner = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  & li {
    margin-right: 1.25rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const TeamBoards: FunctionComponent<Props> = props => {
  const { boards } = props

  return (
    <TeamBoardsInner>
      {boards.map(board =>
        <li key={board.id}>
          <NeutralLink to={`board/${board.id}`}>
            <BoardCard board={board}/>
          </NeutralLink>
        </li>
      )}
    </TeamBoardsInner>
  )
}

export default TeamBoards
