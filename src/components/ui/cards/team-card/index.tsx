import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {dark, light} from "../../../../styles/modules/colors";
import {ViewerTeamsQueryViewerTeams} from "../../../../graphql/components";
import TeamCardBadge from "./TeamCardBadge";
import useViewer from "../../../../hooks/useViewer";
import {DEFAULT_BORDER_RADIUS, DEFAULT_BOX_SHADOW} from '../../../../styles/modules/variables';

interface Props {
  team: ViewerTeamsQueryViewerTeams
}

const TeamCardInner = styled.div`
  position: relative;
  width: 400px;
  height: 130px;
  background: ${light};
  padding: 20px;
  color: ${dark};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  box-shadow: ${DEFAULT_BOX_SHADOW};
  ${TeamCardBadge} {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`

const TeamCard: FunctionComponent<Props> = props => {
  const { team } = props
  return (
    <TeamCardInner {...props}>
      {team.name}
      <TeamCardBadge owner={team.owner}/>
    </TeamCardInner>
  )
}

export default styled(TeamCard)``
