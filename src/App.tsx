import React, {FunctionComponent, Suspense} from "react"
import styled from "styled-components"
import {Router, Location} from '@reach/router';
import posed, {PoseGroup} from 'react-pose';
import Route from './components/Route';
import Home from './views/Home';
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import AppNav from "./components/ui/AppNav";
import Profile from "./views/Profile";
import {APPNAV_BACKGROUND, APPNAV_HEIGHT} from "./styles/modules/variables";
import Team from "./views/Team";
import Loaders from "./components/ui/Loaders";
import Board from "./views/Board";
import AnonRoute from "./components/AnonRoute";
import ProtectedRoute from "./components/ProtectedRoute";

const RoutesContainer = posed.div({
  enter: {opacity: 1, beforeChildren: true, x: 0},
  exit: {opacity: 0, x: 5}
});

const PosedRouter: FunctionComponent = ({children}) => (
  <Location>
    {({location}) => (
      <PoseGroup>
        <RoutesContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RoutesContainer>
      </PoseGroup>
    )}
  </Location>
);

const AppInner = styled.div`
  
`

const Main = styled.main`
  position: fixed;
  width: 100%;
  margin-top: ${APPNAV_HEIGHT};
`

const App: FunctionComponent = () => {
  return (
    <AppInner>
      <Suspense fallback={<nav style={{position: 'fixed', zIndex: 1, height: APPNAV_HEIGHT, background: APPNAV_BACKGROUND, width: '100%'}} />}>
        <AppNav/>
      </Suspense>
      <Main>
          <Suspense fallback={<div style={{ padding: '40px'}}><Loaders count={1} loader="list"/></div>}>
            <PosedRouter>
              <Route component={Home} path="/"/>
              <AnonRoute component={Login} path="/login"/>
              <ProtectedRoute component={Profile} path="/profile"/>
              <ProtectedRoute component={Team} path="/team/:id"/>
              <ProtectedRoute component={Board} path="/team/:teamId/board/:boardId"/>
              <ProtectedRoute component={Dashboard} path="/dashboard"/>
              <Route component={NotFound} default/>
            </PosedRouter>
          </Suspense>
      </Main>
    </AppInner>
  );
}

export default App
