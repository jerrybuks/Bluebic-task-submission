import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

import './styles/App.scss'

class App extends Component {
  render () {
    return (
      <div>
        <header
          style={{
            fontSize: '1.8rem'
          }}
        >
          {/* <NavLink to='/'>Home</NavLink>
          <br /> */}
          <NavLink to='/ReadBooks'>ReadBook</NavLink>
          <br />
          <NavLink to='/Review'>Review</NavLink>
          <br />
          <NavLink to='/Signup'>Signup</NavLink>
          <br />
          <NavLink to='/AddReview'>AddReview</NavLink>
          <br />
          <NavLink to='/BookList'>BookList</NavLink>
          <br />
          <NavLink to='/BookSubmitted'>BookSubmitted</NavLink>
          <br />
        </header>
      </div>
    )
  }
}

export default App
