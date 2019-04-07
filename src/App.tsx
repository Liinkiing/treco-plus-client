import React, {FunctionComponent, Suspense} from "react"
import styled from "styled-components"
import {Router} from '@reach/router';
import Route from './components/Route';
import Home from './views/Home';
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import AppNav from "./components/ui/AppNav";
import Profile from "./views/Profile";
import {APPNAV_BACKGROUND, APPNAV_HEIGHT} from "./styles/modules/variables";

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {

  return (
    <AppInner>
      <Suspense fallback={<nav style={{height: APPNAV_HEIGHT, background: APPNAV_BACKGROUND, width: '100%'}} />}>
        <AppNav/>
      </Suspense>
      <main>
        <Router>
          <Route component={Home} path="/"/>
          <Route component={Login} path="/login"/>
          <Route component={Profile} path="/profile"/>
          <Route component={Dashboard} path="/dashboard"/>
          <Route component={NotFound} default/>
        </Router>
      </main>
    </AppInner>
  );
}

export default App
