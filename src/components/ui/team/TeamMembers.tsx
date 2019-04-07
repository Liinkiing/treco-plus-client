import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {TeamMembersMembersFragment} from "../../../graphql/components";
import {dark, light} from "../../../styles/modules/colors";

interface Props {
  members: TeamMembersMembersFragment[]
}

const TeamMembersInner = styled.aside`
  padding: 1.25rem;
  background: ${light};
  color: ${dark}
  width: 400px;
  & h3 {
    margin-top: 0;
  }
`

const MembersList = styled.ul`
  list-style: -moz-tamil;
`

const TeamMembers: FunctionComponent<Props> = props => {
  const { members } = props

  return (
    <TeamMembersInner {...props}>
      <h3>Membres</h3>
      <MembersList>
        {members.map(member =>
          <li key={member.id}>{member.username} ({member.email})</li>
        )}
      </MembersList>
    </TeamMembersInner>
  )
}

export default styled(TeamMembers)``
