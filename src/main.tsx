import 'modern-css-reset'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import 'assets/scss/main.scss'
import HomePage from 'views/home/home.page'
import MePage from 'views/me/me.page'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path={'/'} element={<Navigate to="/home"/>}></Route>
      <Route path={'/home'} element={<HomePage/>}></Route>
      <Route path={'/me'} element={<MePage/>}></Route>
    </Routes>
  </Router>
)
