import React, {FunctionComponent} from 'react'
import styled, {css} from 'styled-components'
import Page from "../components/Page";
import {RouteComponentProps} from "@reach/router";
import {useTeamQuery} from "../graphql/components";
import TeamMembers from "../components/ui/team/TeamMembers";
import {APPNAV_HEIGHT} from "../styles/modules/variables";
import {breakpoint} from "../styles/modules/mixins";
import ErrorMessage from '../components/ui/ErrorMessage';
import TeamBoards from "../components/ui/team/TeamBoards";

type Props = RouteComponentProps<{ id: string }> & {

}

const TeamInner = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${APPNAV_HEIGHT});
  ${TeamMembers} {
    width: 100%;
    order: -1
  }
  & h1 {
    margin-top: 0;
  }
  ${breakpoint("tablet", css`
    flex-direction: row;
    ${TeamMembers} {
      min-width: 300px;
      max-width: 400px;
      height: 100%;
      order: unset;
    }
  `)}
`

const Content = styled.div`
  padding: 2rem;
`

const Team: FunctionComponent<Props> = props => {
  const { id } = props
  const { data, error } = useTeamQuery({
    suspend: true,
    variables: { id: id! }
  })
  if (error) {
    return <ErrorMessage error={error}/>
  }

  const { name, members, owner, description } = data!.node!

  return (
    <Page container={false}>
      <TeamInner>
        <Content>
          <h1>Team {name}</h1>
          <p>{description}</p>
          <TeamBoards boards={data!.node!.boards}/>
        </Content>
        <TeamMembers members={members}/>
      </TeamInner>
    </Page>
  )
}

export default Team
