import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"
import "../../components/all_css.css"




const Navbar = () => {
    return (
        <div className="main-class1 sticky" >
            <div className="container-fluid navbg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg mynav">
                            <div className="container-fluid">
                           
                                <NavLink className="navbar-brand heading" to="/">KitchenGuide</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon mytog"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{ marginLeft: "auto" }}>
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link cfont"  to="/" style={{ color: "white", paddingRight: "20px" }}>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/popular" 
                                                className="nav-link cfont"  style={{ color: "white", paddingRight: "20px" }}>Suggestions</NavLink>
                                        
                                        </li>
                                        <li className="nav-item">
                                        
                                            <NavLink 
                                                className="nav-link cfont" to="/find" style={{ color: "white" }}>Search</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
