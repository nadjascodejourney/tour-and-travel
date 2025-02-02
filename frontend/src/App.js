import React, { useEffect } from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './sreenPages/Home'
import Signup from './sreenPages/Signup'
import Profile from './sreenPages/Profile'
import Location from './sreenPages/TouristPlaces';

import Login from './sreenPages/Login';
function App() {
  // const { loginWithPopup, user, isAuthenticated, isLoading, logout } = useAuth0();

  useEffect(() => {
    
  }, []); 

  return (
    <>
      <Routes>

        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/locations" element={<Location/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>

  
      </Routes>
    </>
  );
};

export default App;
