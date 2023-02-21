import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Components/Signin'
import SignUp from '../Components/SignUp'

export default function AllRoutes() {
  return (
      <div>
          <Routes>
              
              <Route path='/signIn' element={<SignIn/>} />
              <Route path='/signUp' element={<SignUp/>} />
          </Routes>
    </div>
  )
}
