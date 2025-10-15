import React from 'react'
import { Route, Routes } from "react-router"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen"
import LoginScreen from "./Screens/LoginScreen/LoginScreen"
import MainLayout from './Layout/MainLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
