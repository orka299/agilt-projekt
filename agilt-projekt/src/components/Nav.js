import React, { Component, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Nav() {
    return (
        
        <div className="NavSize">

        <nav className="main-nav">


            <ul>
                <Link to="/">Home</Link>
                <Link to="/Alexander">Alexander</Link>
                <Link to="/Basiru">Basiru</Link>
                <Link to="/Daniyal">Daniyal</Link>
                <Link to="/Abdul">Abdul</Link>
                <Link to="/Oliver">Oliver</Link>
            </ul>
            
               
    
        </nav>


        </div>
        
    )
}

export default Nav;