import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'

const App = () => {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
