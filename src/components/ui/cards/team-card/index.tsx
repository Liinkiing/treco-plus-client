import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {ViewerTeamsQueryViewerTeams} from "../../../../graphql/components";
import TeamCardBadge from "./TeamCardBadge";
import {BASE_CARD} from "../../../../styles/modules/components";

interface Props {
  team: ViewerTeamsQueryViewerTeams
}

const TeamCardInner = styled.div`
  ${BASE_CARD};
  position: relative;
  ${TeamCardBadge} {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`

const TeamCard: FunctionComponent<Props> = props => {
  const {team} = props
  return (
    <TeamCardInner {...props}>
      {team.name}
      <TeamCardBadge owner={team.owner}/>
    </TeamCardInner>
  )
}

export default styled(TeamCard)``
