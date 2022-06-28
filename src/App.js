import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart'


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Header/>}>

          </Route>
            <Route path='/products/:id' element={<Cart/>}>

          </Route>

        </Routes> 
        
    </div>
  )
}

export default App

