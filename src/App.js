import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export default function App() {
  const user = null

  return (
    <Router>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
    </Router> 
  );
}