import { NavLink } from "react-router-dom";  
import React, { Component } from 'react'

class NavBar extends Component {
    render() { 
        return( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top" >  
            <NavLink to="/" className="navbar-brand" exact activeStyle={{ color: "black" }}>  
                Todo App
            </NavLink>  
            <div className="collapse navbar-collapse" id="navbarNav">  
                <ul className="navbar-nav">  
                    <li className="nav-item active">  
                        <NavLink to="/" className="nav-link" exact activeStyle={{ color: "black" }}>  
                            User  
                        </NavLink>  
                    </li>  
                    <li className="nav-item">  
                        <NavLink to="/todo" className="nav-link" exact activeStyle={{ color: "black" }}>  
                            Todo  
                        </NavLink>  
                    </li>
                </ul>  
            </div>  
            </nav>
        )
    }
}

export default NavBar;