import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import { useContext } from 'react';
import { AppContext } from './context'
import User from './pages/User/User';
import {BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import Explore from './pages/Explore/Explore';
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    }
})

const App = () => {
    const {loggedIn}=useContext(AppContext)
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                
                <Route exact path="/">{!loggedIn?<Register />:<Redirect to="/home"/>}</Route>
                <Route exact path="/Home">{loggedIn?<Home />:<Redirect to="/"/>}</Route>
                <Route exact path="/User">{loggedIn?<User />:<Redirect to="/"/>}</Route>
                <Route exact path="/explore">{loggedIn?<Explore />:<Redirect to="/"/>}</Route>
            </Switch>
        </Router>
        </ThemeProvider>
    )
}

export default App
