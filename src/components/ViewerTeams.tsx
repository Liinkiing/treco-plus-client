import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {useViewerTeamsQuery} from "../graphql/components";
import ErrorMessage from "./ui/ErrorMessage";
import TeamCard from './ui/cards/team-card/'

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
        <TeamCard key={team.id} team={team}/>
      )}
    </ViewerTeamsInner>
  )
}

export default ViewerTeams
