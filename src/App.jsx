import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
function App() {

  return (
    <div className='site'>
      <Topbar/>
      <div className="containers">
        <Sidebar/> 
        <div className='others'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<UserList/>}/>
          <Route path='/user/:id' element={<User/>}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;