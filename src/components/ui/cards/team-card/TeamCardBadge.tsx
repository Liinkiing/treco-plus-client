import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {TeamCardBadgeOwnerFragment} from "../../../../graphql/components";
import {rgba} from '../../../../utils/colors';
import {dark} from "../../../../styles/modules/colors";
import {DEFAULT_BORDER_RADIUS} from "../../../../styles/modules/variables";

interface Props {
  owner: TeamCardBadgeOwnerFragment
}

const TeamCardBadgeInner = styled.div`
  background: ${rgba(dark, 0.3)};
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${DEFAULT_BORDER_RADIUS};
`

const TeamCardBadge: FunctionComponent<Props> = props => {
  const { owner } = props
  return (
    <TeamCardBadgeInner {...props}>
      {owner.username}
    </TeamCardBadgeInner>
  )
}

export default styled(TeamCardBadge)``
