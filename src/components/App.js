import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (

    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: 450 }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/react-firebase-auth' component={Dashboard} />
              <PrivateRoute path='/react-firebase-auth/update-profile' component={UpdateProfile} />
              <Route path='/react-firebase-auth/signup' component={Signup} />
              <Route path='/react-firebase-auth/login' component={Login} />
              <Route path='/react-firebase-auth/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>

  )
}

export default App
