import { useState } from 'react'
import './App.css'
import Signin from './component/Signin'
import Signup from './component/Signup'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Dashboard from './component/Dashboard'
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Signin />}/>
        <Route path='/sign-up' element={<Signup />}/>
        <Route path='/dash' element={<Dashboard />}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
