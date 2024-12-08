import './App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';
import Header from './pages/header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';

function App() {
 
  return (
   <>
      <Header />
      <Routes>
        <Route path='/' exact='true' element={<Dashboard/>} />
        <Route path='/employee' element={<PostUser/>} />
        <Route path='/employee/:id' element={<UpdateUser/>} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
   </>
  );
}

export default App;
