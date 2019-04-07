import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {useViewerTeamsQuery} from "../graphql/components";
import ErrorMessage from "./ui/ErrorMessage";
import TeamCard from './ui/cards/team-card/'
import NeutralLink from './NeutralLink';

const ViewerTeamsInner = styled.div`
  
`

const ViewerTeams: FunctionComponent = () => {
  const { data, error } = useViewerTeamsQuery({ suspend: true})
  if (error) {
    return <ErrorMessage error={error}/>
  }

  return (
    <ViewerTeamsInner>
      {data!.viewerTeams.map(team =>
        <NeutralLink key={team.id} to={`/team/${team.id}`}>
          <TeamCard team={team}/>
        </NeutralLink>
      )}
    </ViewerTeamsInner>
  )
}

export default ViewerTeams
