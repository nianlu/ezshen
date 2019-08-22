import React from 'react';
import Home from './Home'
import Login from './Login'

function Body(props) {
  return (
    <div className="container">
      {props.active === 'home' && 
        <Home />
      }
      {props.active === 'login' && 
        <Login />
      }
      
    </div>
  );
}

export default Body;
