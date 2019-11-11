import React from 'react';
import Home from '../feature/home/Home'
import Login from '../feature/login/Login'
import Register from '../feature/login/Register'
import Schools from '../feature/schools/Schools'

function Body(props) {
  return (
    <div className="container">
      {props.active === 'home' && 
        <Home />
      }
      {props.active === 'schools' && 
        <Schools />
      }
      {props.active === 'login' && 
        <Login />
      }
      {props.active === 'register' && 
        <Register />
      }
      
    </div>
  );
}

export default Body;
