import React, {FunctionComponent} from 'react'
import {Redirect, RouteComponentProps} from '@reach/router'
import AuthManager from "../services/AuthManager";

type Props = { component: FunctionComponent } & RouteComponentProps

const REDIRECT_URL = '/'

const AnonRoute: FunctionComponent<Props> = ({component: Component, ...rest}) => {
  if (AuthManager.isLoggedIn) {
    return <Redirect to={REDIRECT_URL} noThrow/>
  }

  return (
    <Component {...rest} />
  );
};

export default AnonRoute;
