import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import AuthManager from "../services/AuthManager";
import {Redirect} from "@reach/router";

const ProfileInner = styled.div`
  
`

const Profile: FunctionComponent = () => {
  if (!AuthManager.isLoggedIn) {
    return <Redirect to="/login" noThrow/>
  }
  return (
    <ProfileInner>
      <h1>Profile</h1>
      <p>Je suis le Profile</p>
    </ProfileInner>
  )
}

export default Profile
