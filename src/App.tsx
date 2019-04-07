import React, { FunctionComponent } from "react"
import styled from "styled-components"
import useViewer from "./hooks/useViewer";
import {Link, Router} from '@reach/router';
import Route from './components/Route';
import Home from './views/Home';
import NotFound from "./views/NotFound";
import AuthManager from "./services/AuthManager";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {
  const viewer = useViewer()
  const { isLoggedIn } = AuthManager

  return (
    <AppInner>
      <nav>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        {isLoggedIn && <button onClick={AuthManager.logout}>Logout</button>}
      </nav>
      <main>
        <Router>
          <Route component={Home} path="/"/>
          <Route component={Login} path="/login"/>
          <Route component={Dashboard} path="/dashboard"/>
          <Route component={NotFound} default/>
        </Router>
      </main>
    </AppInner>
  );
}

export default App
