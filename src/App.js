//rafce
import React, { createContext, useReducer} from 'react';
// import bgimage from './images/bgimage.jpg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import { initialState, reducer } from '../src/reducer/UseReducer';

// 1. Context API
export const UserContext = createContext();
export const Routing = () => {
  return(
    <>
    <Switch>
    <Route path="/" exact>
      <Home />
    </Route>

    <Route path="/about">
      <About />
    </Route>

    <Route path="/contact">
      <Contact />
    </Route>

    <Route path="/login">
      <Login />
    </Route>

    <Route path='/signup'>
      <Signup />
    </Route>

    <Route path='/logout'>
      <Logout />
    </Route>

    <Route>
      <ErrorPage />
    </Route>
  </Switch>
    </>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={'Login-component'}>
    <UserContext.Provider value = {{state, dispatch}}>
      <Navbar />
     <Routing/>
      </UserContext.Provider>
    </div>
  )
}

export default App
