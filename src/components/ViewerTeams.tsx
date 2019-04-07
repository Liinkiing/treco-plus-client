import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {useViewerTeamsQuery} from "../graphql/components";
import ErrorMessage from "./ui/ErrorMessage";
import TeamCard from './ui/cards/team-card/'
import {Link as ReachLink} from "@reach/router";

const Link = styled(ReachLink)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

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
        <Link key={team.id} to={`/team/${team.id}`}>
          <TeamCard team={team}/>
        </Link>
      )}
    </ViewerTeamsInner>
  )
}

export default ViewerTeams
