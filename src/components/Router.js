import React from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

import AddReview from './AddReveiw'
import BookList from './BookList'
import BookSubmitted from './BookSubmitted'
import ReadBooks from './ReadBooks'
import Review from './Review'
import Signup from './Signup'
import NotFound from './NotFound'
import App from '../App'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/AddReview' component={AddReview} />
        <Route path='/BookList' component={BookList} />
        <Route path='/BookSubmitted' component={BookSubmitted} />
        <Route path='/ReadBooks' component={ReadBooks} />
        <Route path='/Review' component={Review} />
        <Route path='/Signup' component={Signup} />
        <Route path='/' exact path='/' component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
