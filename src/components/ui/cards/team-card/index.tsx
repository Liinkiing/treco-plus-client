import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {black, dark, light} from "../../../../styles/modules/colors";
import {ViewerTeamsQueryViewerTeams} from "../../../../graphql/components";
import TeamCardBadge from "./TeamCardBadge";
import useViewer from "../../../../hooks/useViewer";
import {DEFAULT_BORDER_RADIUS, DEFAULT_BOX_SHADOW, DEFAULT_TRANSITON} from '../../../../styles/modules/variables';
import {lighten} from "polished";
import {rgba} from "../../../../utils/colors";

interface Props {
  team: ViewerTeamsQueryViewerTeams
}

const TeamCardInner = styled.div`
  transition: all 0.15s ease-in;
  position: relative;
  width: 400px;
  height: 130px;
  background: ${light};
  padding: 20px;
  color: ${dark};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  box-shadow: ${DEFAULT_BOX_SHADOW};
  &:hover {
    cursor: pointer;
    background: ${lighten(0.1, light)};
    transform: translateY(-5px);
    box-shadow: 0 20px 20px ${rgba(black, 0.15)};
  }
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
