import React from "react"
import "./App.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Detail from "./pages/Detail"
import Login from "./pages/Login"
function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
